// app/api/getImages/route.js
import s3 from "@/aws-config.js";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || ''; // Get folder from query params or default to root

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: folder, // Use the folder as a prefix to limit to a specific folder in the S3 bucket
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        const images = data.Contents
            .filter(item => /\.(jpg|jpeg|png|gif)$/.test(item.Key)) // Filter to get only image files
            .map(item => ({
                key: item.Key,
                url: `https://${params.Bucket}.s3.amazonaws.com/${item.Key}`,
            }));

        return new Response(JSON.stringify(images), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to retrieve images' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}