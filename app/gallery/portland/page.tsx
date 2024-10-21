import MasonryGrid from "@/components/masonrygrid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Home() {
  return (
    	<>
			<div className="flex items-start -mb-6">
				<a href="/gallery">
					<ArrowBackIcon className="ms-12 bg-black rounded-full text-white me-2"/>
					<span className="text-xs mt-1">Return To Gallery</span>
				</a>
			</div>
    		<div className="mt-12 text-center ">
    			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black/80 md:text-5xl lg:text-6xl underline decoration-8 decoration-blue/50">Portland Film</h1>
        		<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">From my trip to Portland September 22-29, 2024. First time trying Filmphotography. Shot with my grandads Canon AT-1 with Fuji 200.</p>
      		</div>
      		<MasonryGrid folder="portland-film" />
    	</>
  	);
};
