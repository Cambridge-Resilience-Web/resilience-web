const data = {
	nodes: [
		{
			id: 0,
			label: 'Community Resilience and Regeneration',
			color: '#64b37c',
			size: 70,
			font: {
				size: 42,
			},
			isDescriptive: true,
		},
		{
			id: 20,
			label: 'Adult Education',
			website: '',
			color: '#9d9d9e',
			isDescriptive: true,
		},
		{
			id: 21,
			label: 'Faith Groups',
			website: '',
			color: '#9d9d9e',
			isDescriptive: true,
		},
		{
			id: 22,
			label: 'Other voluntary groups and charities',
			website: '',
			color: '#9d9d9e',
			isDescriptive: true,
		},
		{
			id: 35,
			label: 'Nature + Environment (Learning + Advocacy)',
			website: '',
			color: '#9d9d9e',
			isDescriptive: true,
		},
		// Local food businesses
		{
			id: 30,
			label:
				"Local Food businesses with 'buy or grow local where possible' policy",
			website: '',
			color: '#9d9d9e',
			isDescriptive: true,
		},

		{
			website: 'https://www.transitioncambridge.org/',
			id: '1',
			label: 'Transition Cambridge',
		},
		{
			website: 'https://cambridgecarbonfootprint.org/',
			id: '2',
			label: 'Cambridge Carbon Footprint',
		},
		{
			website: 'https://www.smartertransport.uk',
			id: '3',
			label: 'Smarter Cambridge Transport',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTSkillshare/NextRepairCafe',
			id: '4',
			label: 'Repair Cafes (Jointly with CCF)',
		},
		{
			website: 'https://www.transitioncambridge.org/wiki/TT/Cafe',
			id: '5',
			label: 'Cafe nights with talks & activities',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTEnergy/HomePage',
			id: '6',
			label: 'Energy Group',
		},
		{
			website: 'https://emptycommongarden.blogspot.com/',
			id: '7',
			label: 'Empty Common Community Garden',
		},
		{
			website: 'http://www.cambridge.growingspaces.org/',
			id: '8',
			label: 'Growing Spaces',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTFood/RomseyCommunityGarden',
			id: '9',
			label: 'Romsey Town Community Garden',
		},
		{
			website: 'https://cambridge.cropshare.org.uk/',
			id: '10',
			label: 'Crop Share',
		},
		{
			website: 'https://carbonneutralcambridge.org/',
			id: '11',
			label: 'Carbon Neutral Cambridge',
		},
		{
			website: 'https://www.thecambridgecommons.org/',
			id: '12',
			label: 'Cambridge Commons',
		},
		{
			website: 'https://www.cambridge.gov.uk/',
			id: '13',
			label: 'Cambridge City Council',
		},
		{
			website: 'https://cambridgedoughnut.org.uk/',
			id: '14',
			label: 'Cambridge Doughnut',
		},
		{
			website: 'https://cambridge2030.org/',
			id: '16',
			label: 'Cambridge 2030',
		},
		{
			website: 'https://www.cambridgeindependent.co.uk/',
			id: '17',
			label: 'Cambridge Independent',
		},
		{
			website: 'https://www.cambridge.gov.uk/apply-for-an-allotment-plot',
			id: '18',
			label: 'Allotment Societies',
		},
		{
			website: 'https://www.cam.letslink.org/',
			id: '19',
			label: 'Camlets Local Trading',
		},
		{
			website:
				'https://en-gb.facebook.com/pg/YouthStrike4ClimateCambridge/posts/',
			id: '24',
			label: 'School strikes',
		},
		{
			website: 'https://www.facebook.com/MovementAgainstRaciism/',
			id: '26',
			label: 'Movement Against Racism',
		},
		{
			website: 'https://www.facebook.com/blacklivesmattercambridge/',
			id: '27',
			label: 'Cambridge For Black Lives',
		},
		{
			website: 'https://www.cwrc.org.uk/',
			id: '28',
			label: 'Womens Resources Centre',
		},
		{
			website: 'https://cambridge.thewi.org.uk/',
			id: '29',
			label: 'Womens Institute Groups',
		},
		{
			website: 'https://www.cofarm.co/cambridge',
			id: '31',
			label: 'CoFarm Cambridge',
		},
		{ website: '', id: '32', label: 'Cycle food deliveries' },
		{
			website: 'https://cambridgesustainablefood.org/',
			id: '33',
			label: 'Cambridge Sustainable Food',
		},
		{
			website: 'https://www.waterlandorganics.com/',
			id: '34',
			label: 'Waterland Organics',
		},
		{
			website:
				'https://cambridgecarbonfootprint.org/what-we-do/thermal-imaging/',
			id: '36',
			label: 'DIY Thermal Imaging',
		},
		{
			website:
				'https://cambridgecarbonfootprint.org/what-we-do/net-zero/',
			id: '37',
			label: 'Net Zero Now',
		},
		{
			website: 'http://openecohomes.org/',
			id: '38',
			label: 'Open Eco Homes',
		},
		{ website: '', id: '39', label: 'Circular Economy Talks' },
		{
			website: 'https://workthatreconnects.org/',
			id: '40',
			label: 'The Work That Reconnects',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/CleanWheels/HomePage',
			id: '41',
			label: 'Clean Wheels',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTFood/GrowYourOwnSupport',
			id: '42',
			label: 'Grow Your Own',
		},
		{
			website: 'http://www.reachsolarfarm.co.uk/',
			id: '43',
			label: 'Reach Solar Farm CBS',
		},
		{
			website: 'https://www.transitioncambridge.org/wiki/TTEnergy/FAQs',
			id: '44',
			label: 'Info on Home Energy',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTFood/LocalSources',
			id: '45',
			label: 'Free Fruit Map',
		},
		{
			website:
				'https://www.transitioncambridge.org/wiki/TTPermaculture/HomePage',
			id: '46',
			label: 'Permaculture Guild',
		},
		{
			website:
				'https://www.cambridge-news.co.uk/news/cambridge-news/seven-stunning-wildlife-walks-cambridgeshire-18702522',
			id: '47',
			label: 'Wildlife Wanders',
		},
		{
			website: 'https://www.camcycle.org.uk/',
			id: '48',
			label: 'Camcycle - Cambridge Cycling Campaign',
		},
		{
			website: 'https://www.wildlifetrusts.org/',
			id: '49',
			label: 'Wildlife Trust',
		},
		{
			website:
				'https://www.wildlifebcn.org/nature-reserves/trumpington-meadows',
			id: '50',
			label: 'Trumpington Meadows',
		},
		{
			website: 'https://logansmeadow.wordpress.com',
			id: '51',
			label: 'Friends of Logans Meadow',
		},
		{
			website: 'http://millroadcemetery.org.uk/',
			id: '52',
			label: 'Friends of Mill Road Cemetery',
		},
		{
			website: 'https://stourbridgecommon.wordpress.com/',
			id: '53',
			label: 'Friends of Stourbridge Common',
		},
		{
			website: 'https://www.midsummercommon.org.uk/',
			id: '54',
			label: 'Friends of Midsummer Common',
		},
		{
			website: 'https://friendsofcherryhintonbrook.org.uk/',
			id: '55',
			label: 'Friends of Cherry Hinton Brook',
		},
		{
			website: 'http://www.cherryhintonhall.com/',
			id: '56',
			label: 'Friends of Cherry Hinton Hall',
		},
		{
			website: 'https://www.camconservancy.org/',
			id: '57',
			label: 'Cam Conservators',
		},
		{
			website: 'https://cambridge.greenparty.org.uk/',
			id: '58',
			label: 'Cambridge Green Party',
		},
		{
			website: 'https://www.cambridgelabour.org.uk/',
			id: '59',
			label: 'Cambridge Labour Party',
		},
		{
			website: 'https://www.cambridgelibdems.org.uk/',
			id: '60',
			label: 'Cambridge Lib/Dems',
		},
		{
			website: 'https://www.chsgroup.org.uk/',
			id: '61',
			label: 'Cambridge Housing Associations',
		},
		{
			website: 'www.fecra.org.uk',
			id: '62',
			label: 'Federation of Cambridge Residents Associations',
		},
		{
			website: 'https://www.cambridge.gov.uk/scrapstore',
			id: '63',
			label: 'Community Scrapstore',
		},
		{
			website: 'https://www.facebook.com/communitywardrobecambridge/',
			id: '64',
			label: 'Community Wardrobe',
		},
		{
			website:
				'http://grantchester.org.uk/activities/annual-events/apple-pressing/',
			id: '65',
			label: 'Community Apple Pressing',
		},
		{
			website: 'https://www.zero.cam.ac.uk/',
			id: '66',
			label: 'Zero Carbon Future Initiative',
		},
		{ website: 'https://web.makespace.org/', id: '67', label: 'Makespace' },
		{
			website:
				'https://www.cambridgeconservation.org/david-attenborough-building-synergy-project/',
			id: '68',
			label: 'David Attenborough Building',
		},
		{
			website: 'https://www.cambridgeconservationforum.org.uk/',
			id: '69',
			label: 'Cambridge Conservation Forum',
		},
		{
			website: 'https://naturalcambridgeshire.org.uk/',
			id: '70',
			label: 'Natural Cambridgeshire',
		},
		{
			website: 'https://camvalleyforum.uk/',
			id: '71',
			label: 'Cam Valley Forum',
		},
		{
			website: 'https://www.cambridgeppf.org/',
			id: '72',
			label: 'Cambridge PPF',
		},
		{
			website: 'http://www.cnhs.org.uk/',
			id: '73',
			label: 'Cambridge Natural History Society',
		},
		{
			website:
				'https://www.cambridgeppf.org/pages/category/wandlebury-country-park',
			id: '74',
			label: 'Wandlebury Country Park',
		},
		{
			website: 'https://www.hillsroad.ac.uk/adult',
			id: '75',
			label: 'Hills Rd Adult Education',
		},
		{
			website: 'https://www.cambsals.co.uk/',
			id: '76',
			label: 'Cambridgeshire Skills',
		},
		{
			website: 'https://www.camre.ac.uk/',
			id: '77',
			label: 'Cambridge Regional College',
		},
		{
			website:
				'https://www.cambridgeshire.gov.uk/directory/listings/adult-learn-and-train,-cambridge-academic-partnership',
			id: '78',
			label: 'Adult Learn + Train',
		},
		{ website: 'https://www.u3ac.org.uk/', id: '79', label: 'U3AC' },
		{
			website: 'https://aru.ac.uk/',
			id: '80',
			label: 'Anglia Ruskin University',
		},
		{
			website: 'http://www.cambridgebuddhistsociety.org.uk/',
			id: '81',
			label: 'Buddhist groups',
		},
		{
			website: 'https://www.cambridgeshire-quakers.org.uk/',
			id: '82',
			label: 'Friends meeting',
		},
		{
			website: 'https://cambridgecentralmosque.org/',
			id: '83',
			label: 'Mosques',
		},
		{ website: '', id: '84', label: 'Other faiths' },
		{ website: '', id: '85', label: 'Churches' },
		{
			website: 'https://en-gb.facebook.com/CambridgeGreenpeace/',
			id: '86',
			label: 'Greenpeace',
		},
		{
			website: 'http://www.cambridgefriendsoftheearth.co.uk/',
			id: '87',
			label: 'Friends of the Earth',
		},
		{ website: 'https://camcrag.org.uk/', id: '88', label: 'CamCRAG' },
		{
			website: 'https://xrcambridge.org/',
			id: '23',
			label: 'Extinction Rebellion',
		},
		{
			website: 'https://xrcambridge.org/youth',
			id: '89',
			label: 'XR Youth',
		},
		{
			website: 'https://www.facebook.com/XRCamUnis/',
			id: '90',
			label: 'XR Cambridge Unis',
		},
		{
			website: 'https://www.facebook.com/animalrebellioncambridge/',
			id: '91',
			label: 'Animal Rebellion Cambridge',
		},
		{ website: '', id: '92', label: 'Silent Rebellion' },
		{
			website: 'http://www.socialfirmsengland.co.uk/',
			id: '25',
			label: 'Local social firms',
		},
		{
			website: 'https://prospectstrust.org.uk/',
			id: '94',
			label: 'Prospects Trust (Snakehall Farm)',
		},
		{
			website: 'https://www.cpft.nhs.uk/Darwinnursery/',
			id: '95',
			label: 'Darwin Nurseries',
		},
		{
			website: 'https://www.priorsflour.co.uk/',
			id: '96',
			label: 'Fosters Mill',
		},
		{
			website:
				'https://cambridgesustainablefood.org/food-directory/cambridge-farmers-market',
			id: '97',
			label: 'Hawthorn Farm Market Stall',
		},
		{ website: '', id: '98', label: 'Girton Bakery' },
		{
			website:
				'https://cambridgesustainablefood.org/food-directory/bread-on-a-bike',
			id: '99',
			label: 'Bread on a Bike',
		},
		{
			website:
				'https://www.facebook.com/pages/category/Community/Simons-Local-Vegetable-Stall-on-the-Sunday-Farmers-Market-in-Cambridge-536598633028253/',
			id: '100',
			label: 'Simons Vegetable Stall',
		},
		{
			website: 'https://radmorefarmshop.co.uk/',
			id: '101',
			label: 'Radmore Farm Shop',
		},
		{
			website: 'https://arjunawholefoods.co.uk/',
			id: '102',
			label: 'Arjuna Wholefoods',
		},
		{
			website: 'https://www.dailybread.co.uk/',
			id: '103',
			label: 'Daily Bread Wholefood Warehouse',
		},
		{
			website:
				'https://cambridgefoodhub.org/2020/09/08/healthy-start-veg-box-scheme/',
			id: '104',
			label: 'Healthy Start Veg Box Scheme',
		},
		{ website: '', id: '105', label: 'Daily Bread Veg Bed' },
		{
			website: 'https://www.hubbub.org.uk/the-community-fridge',
			id: '106',
			label: 'Community Fridges',
		},
		{
			website: 'https://www.cofco.co.uk/',
			id: '107',
			label: 'Cambridge Organic Food Company',
		},
		{
			website: 'https://www.foodcycle.org.uk/',
			id: '109',
			label: 'Food Cycle',
		},
	],
	edges: [
		{ from: 0, to: 1 },
		{ from: 0, to: 2 },
		{ from: 0, to: 11 },
		{ from: 0, to: 12 },
		{ from: 0, to: 13 },
		{ from: 0, to: 14 },
		{ from: 0, to: 15 },
		{ from: 0, to: 16 },
		{ from: 0, to: 18 },
		{ from: 0, to: 19 },
		{ from: 0, to: 20 },
		{ from: 0, to: 21 },
		{ from: 0, to: 22 },
		{ from: 0, to: 23 },
		{ from: 0, to: 24 },
		{ from: 0, to: 25 },
		{ from: 0, to: 26 },
		{ from: 0, to: 27 },
		{ from: 0, to: 28 },
		{ from: 0, to: 29 },
		{ from: 0, to: 30 },
		{ from: 0, to: 31 },
		{ from: 0, to: 32 },
		{ from: 0, to: 33 },
		{ from: 0, to: 34 },
		{ from: 1, to: 3 },
		{ from: 1, to: 4 },
		{ from: 1, to: 5 },
		{ from: 1, to: 6 },
		{ from: 1, to: 7 },
		{ from: 1, to: 8 },
		{ from: 1, to: 9 },
		{ from: 1, to: 10 },
		{ from: 1, to: 40 },
		{ from: 1, to: 45 },
		{ from: 1, to: 46 },
		{ from: 1, to: 47 },
		{ from: 2, to: 4 },
		{ from: 2, to: 36 },
		{ from: 2, to: 37 },
		{ from: 2, to: 38 },
		{ from: 2, to: 39 },
		{ from: 2, to: 42 },
		{ from: 6, to: 41 },
		{ from: 6, to: 43 },
		{ from: 6, to: 44 },
		{ from: 13, to: 35 },
		{ from: 3, to: 48 },
		{ from: 11, to: 3 },
		{ from: 13, to: 49 },
		{ from: 13, to: 51 },
		{ from: 13, to: 52 },
		{ from: 13, to: 53 },
		{ from: 13, to: 54 },
		{ from: 13, to: 55 },
		{ from: 13, to: 56 },
		{ from: 13, to: 57 },
		{ from: 13, to: 58 },
		{ from: 13, to: 59 },
		{ from: 13, to: 60 },
		{ from: 13, to: 61 },
		{ from: 13, to: 62 },
		{ from: 13, to: 63 },
		{ from: 49, to: 50 },
		{ from: 59, to: 64 },
		{ from: 4, to: 64 },
		{ from: 58, to: 65 },
		{ from: 58, to: 66 },
		{ from: 63, to: 67 },
		{ from: 35, to: 68 },
		{ from: 68, to: 69 },
		{ from: 35, to: 70 },
		{ from: 35, to: 71 },
		{ from: 35, to: 72 },
		{ from: 35, to: 73 },
		{ from: 72, to: 74 },
		{ from: 20, to: 75 },
		{ from: 20, to: 76 },
		{ from: 20, to: 77 },
		{ from: 20, to: 78 },
		{ from: 20, to: 79 },
		{ from: 20, to: 80 },
		{ from: 21, to: 81 },
		{ from: 21, to: 82 },
		{ from: 21, to: 83 },
		{ from: 21, to: 84 },
		{ from: 21, to: 85 },
		{ from: 22, to: 86 },
		{ from: 22, to: 87 },
		{ from: 22, to: 88 },
		{ from: 23, to: 89 },
		{ from: 23, to: 90 },
		{ from: 23, to: 91 },
		{ from: 23, to: 92 },
		{ from: 25, to: 94 },
		{ from: 25, to: 95 },
		{ from: 30, to: 94 },
		{ from: 30, to: 95 },
		{ from: 30, to: 96 },
		{ from: 30, to: 97 },
		{ from: 30, to: 98 },
		{ from: 30, to: 99 },
		{ from: 30, to: 100 },
		{ from: 30, to: 101 },
		{ from: 30, to: 102 },
		{ from: 30, to: 103 },
		{ from: 34, to: 103 },
		{ from: 33, to: 104 },
		{ from: 33, to: 106 },
		{ from: 9, to: 105 },
		{ from: 32, to: 109 },
		{ from: 107, to: 104 },
		{ from: 107, to: 110 },
	],
};

export default data;
