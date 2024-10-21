import { CardGridComponent } from "@/components/card-grid";

export default function Gallery() {
    return (
        <>
            <div className="mt-12">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black/80 md:text-5xl lg:text-6xl underline decoration-8 decoration-blue/50 text-center">Gallery</h1>
            </div>
            <CardGridComponent />
        </>
    );
};
