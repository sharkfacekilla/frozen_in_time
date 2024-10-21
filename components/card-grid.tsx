"use client";

import Image from "next/image";

export function CardGridComponent() {
  const cards = [
    	{
    		id: 1,
    		title: "Portland 2024",
    		image: "/img/portland.jpg",
    		link: "/gallery/portland",
    	},
		//placeholders
    	{
    	  	id: 2,
    	  	title: "City Skyline",
    	  	image: "/placeholder.svg?height=200&width=300",
    	},
    	{
    	  	id: 3,
    	  	title: "Tropical Beach",
    	  	image: "/placeholder.svg?height=200&width=300",
    	},
    	{
    	  	id: 4,
    	  	title: "Forest Trail",
    	 	image: "/placeholder.svg?height=200&width=300",
    	},
    	{
    	  	id: 5,
    	  	title: "Desert Sunset",
    	  	image: "/placeholder.svg?height=200&width=300",
    	},
    	{
    	  	id: 6,
    	  	title: "Snow-capped Peaks",
    	  	image: "/placeholder.svg?height=200&width=300",
    	},
  	];

  return (
    	<div className="container mx-auto px-4 py-8 ">
    		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    	    	{cards.map((card) => (
    	      		<a href={card.link} key={card.id}>
    	        		<div className="bg-white rounded-lg shadow-md overflow-hidden">
    	          			<Image src={card.image} alt={card.title} width={300} height={200} className="w-full h-56 object-cover" />
    	          			<div className="pt-4 pb-4 ms-4">
    	            			<h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
    	          			</div>
    	        		</div>
    	      		</a>
    	    	))}
    	  	</div>
    	</div>
  	);
};
