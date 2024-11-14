export async function initMap() {
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
		ymaps3;

	const map = new YMap(document.getElementById("map"), {
		location: {
			center: [35.917421, 56.858745],
			zoom: 12,
		},
	});

	map.addChild(new YMapDefaultSchemeLayer());
	map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

	const markersData = [
        { coordinates: [35.928421, 56.868745], imageUrl: "./img/icons/marker1.png" },
        { coordinates: [35.937421, 56.878745], imageUrl: "./img/icons/marker1.png" },



		{ coordinates: [35.927753, 56.865076],   imageUrl: "./img/icons/marker1.png"  },
		{ coordinates: [35.947864, 56.867303],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.93181, 56.871807],   imageUrl: "./img/icons/marker1.png"  },


		{ coordinates: [35.936417, 56.870357],   imageUrl: "./img/icons/marker1.png"  },
		{ coordinates: [35.885059, 56.846653],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.878338, 56.848407],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.816494, 56.833861],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.806477, 56.845795],  imageUrl: "./img/icons/marker1.png"   },

		{ coordinates: [35.824332, 56.84842],   imageUrl: "./img/icons/marker1.png"  },
		{ coordinates: [35.911213, 56.879221],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.898584, 56.8808],   imageUrl: "./img/icons/marker2.png"  },
		{ coordinates: [35.893989, 56.88415],   imageUrl: "./img/icons/marker1.png"  },
		{ coordinates: [35.892519, 56.887249],  imageUrl: "./img/icons/marker1.png"   },

		{ coordinates: [35.894392, 56.890485],  imageUrl: "./img/icons/marker1.png"   },
		{ coordinates: [35.868407, 56.873525],  imageUrl: "./img/icons/marker2.png"   },
		{ coordinates: [35.860172, 56.875111],  imageUrl: "./img/icons/marker1.png"   },
	];

    markersData.forEach(data => {
        const markerElement = document.createElement("div");
        markerElement.className = "marker-class";

        const img = document.createElement("img");
        img.src = data.imageUrl;
        img.alt = "Marker image";
        markerElement.style.height = '30px';
        markerElement.style.width = '30px'
        img.style.width = "30px"; 
        img.style.height = "30px";
        img.style.objectFit = "contain"; 


        markerElement.appendChild(img);

        const marker = new YMapMarker(
            {
                coordinates: data.coordinates,
                draggable: false,
                mapFollowsOnDrag: true,
            },
            markerElement
        );
        map.addChild(marker);
    });
}