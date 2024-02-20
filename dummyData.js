const mockTests = [
    {
        id:1,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg",
        name:"Aptitude Placement 2022 - Mock test 3",
        date:"Sep 24",
        price:1101,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:2,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504948572-Service%20Based%20Test%203%20icon.svg",
        name:"Service-Based Companies 2022 - Mock Test 3",
        date:"Sep 22",
        price:1015,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:3,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573432125-Product%20Based%20Test%203%20icon.svg",
        name:"Product-Based Companies 2022 - Mock Test 3",
        date:"Sep 19",
        price:2142,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:4,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
        name:"Aptitude Placement 2022 - Mock test 2",
        date:"Sep 13",
        price:2410,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:5,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573537587-Service%20Based%20Test%202%20icon.svg",
        name:"Service-Based Companies 2022 - Mock Test 2",
        date:"Sep 10",
        price:2665,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:6,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573498423-Product%20Based%20Test%202%20icon.svg",
        name:"Product-Based Companies 2022 - Mock Test 2",
        date:"Sep 8",
        price:2440,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:7,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573764163-Aptitude%20Based%20Test%201%20icon.svg",
        name:"Aptitude Placement 2022 - Mock Test 1",
        date:"Aug 12",
        price:2037,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:8,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573641368-Product%20Based%20Test%201%20icon.svg",
        name:"Product-Based Companies 2022 - Mock Test 1",
        date:"Aug 10",
        price:1930,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:9,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573695778-Service%20Based%20Test%201%20icon.svg",
        name:"Service-Based Companies 2022 - Mock Test 1",
        date:"Aug 8",
        price:2034,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:10,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407560177-Service%20based%20icons_Service_based_T5.svg",
        name:"Service Based Companies Mock Series 2021 - Test 5",
        date:"Aug 2",
        price:2564,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:11,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407518822-Service%20based%20icons_Service_based_T4.svg",
        name:"Service Based Companies Mock Series 2021 - Test 4",
        date:"Jul 31",
        price:1794,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:12,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407475370-Service%20based%20icons_Service_based_T3.svg",
        name:"Service Based Companies Mock Series 2021 - Test 3",
        date:"Jul 27",
        price:1719,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:13,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407428580-Service%20based%20icons_Service_based_T2.svg",
        name:"Service Based Companies Mock Series 2021 - Test 2",
        date:"Jul 24",
        price:1819,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:14,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407371417-Service%20based%20icons_Service_based_T1.svg",
        name:"Service Based Companies Mock Series 2021 - Test 1",
        date:"Jul 20",
        price:2096,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:15,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427278862-Product%20based__Test-5.svg",
        name:"Product Based Companies Mock Series 2021 - Test 5",
        date:"Jul 10",
        price:2145,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:16,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427241382-Product%20based__Test-4.svg",
        name:"Product Based Companies Mock Series 2021 - Test 4",
        date:"Jul 7",
        price:1896,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:17,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427202829-Product+based__Test-3.svg",
        name:"Product Based Companies Mock Series 2021 - Test 3",
        date:"Jul 3",
        price:1804,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:18,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427162525-Product%20based__Test-2.svg",
        name:"Product Based Companies Mock Series 2021 - Test 2",
        date:"Jun 30",
        price:1926,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:19,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427096926-Product%20based__Test-1.svg",
        name:"Product Based Companies Mock Series 2021 - Test 1",
        date:"Jun 26",
        price:2372,
        duration:"120 min",
        cat:"mocktests",
    },

    {
        id:20,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/Service+Based+Mock+test.svg",
        name:"Service-based companies Mock Test 2",
        date:"Oct 30",
        price:2411,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:21,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/Product+Based+Mock+test.svg",
        name:"Product based companies Mock Test 2",
        date:"Oct 23",
        price:1956,
        duration:"90 min",
        cat:"mocktests",
    },

    {
        id:22,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/Service+Based+Mock+test.svg",
        name:"Service-based companies Mock Test 1",
        date:"Oct 16",
        price:1647,
        duration:"60 min",
        cat:"mocktests",
    },

    
    {
        id:23,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/Product+Based+Mock+test.svg",
        name:"Product based companies Mock Test 1",
        date:"Oct 9",
        price:1191,
        duration:"90 min",
        cat:"mocktests",
    },

    {
        id:24,
        image:"https://prepbytes-adaptive-test.s3.ap-south-1.amazonaws.com/images/logic-building.svg",
        name:"Logic Building - 1",
        date:"Sep 18",
        price:1601,
        duration:"90 min",
        cat:"mocktests",
    },

    {
        id:25,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/dbms-2.svg",
        name:"Test your DBMS skills",
        date:"Sep 12",
        price:2857,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:26,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/operatingsystem.svg",
        name:"Test your OS skills",
        date:"Sep 7",
        price:2081,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:27,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/cplus.svg",
        name:"Test your C++ skills",
        date:"Sep 1",
        price:2264,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:28,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/pppImages/subjects/java.svg",
        name:"Test your Java skills",
        date:"Aug 29",
        price:1817,
        duration:"90 min",
        cat:"mocktests",
    },

    
    {
        id:29,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/c.svg",
        name:"Test your C skills",
        date:"Aug 25",
        price:2594,
        duration:"90 min",
        cat:"mocktests",
    },

    {
        id:30,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/computer-networks.svg",
        name:"Placement Mock Test - 2",
        date:"Aug 21",
        price:3357,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:31,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/computer-networks.svg",
        name:"Placement Mock Test - 1",
        date:"Aug 17",
        price:3041,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:32,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/dsalgo.svg",
        name:"Data Structures & Algo - 2",
        date:"Aug 12",
        price:2033,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:33,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/dsalgo.svg",
        name:"Data Structures & Algo - 1",
        date:"Aug 7",
        price:2253,
        duration:"60 min",
        cat:"mocktests",
    },

    {
        id:34,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/aptitude.svg",
        name:"Aptitude",
        date:"Jul 30",
        price:332,
        duration:"60 min",
        cat:"mocktests",
    },

// practicetests
    {
        id:35,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        name:"Aptitude",
        price:200,
        cat:"practicetests",
    },

    {
        id:36,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg",
        name:"Computer Networks",
        price:200,
        cat:"practicetests",
    },

    {
        id:37,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816734176-anomalies-and-functional-dependency.svg",
        name:"Database Management System",
        price:200,
        cat:"practicetests",
    },

    {
        id:38,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623765556116-backtracking.svg",
        name:"Algorithms",
        price:200,
        cat:"practicetests",
    },

    {
        id:39,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623815849291-arrays-and-pointers.svg",
        name:"C Language",
        price:200,
        cat:"practicetests",
    },

    {
        id:40,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623817215289-atomic-transactions.svg",
        name:"Operating System",
        price:200,
        cat:"practicetests",
    },

    {
        id:41,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816336071-abstraction.svg",
        name:"C++ Language",
        price:200,
        cat:"practicetests",
    },

    {
        id:42,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg",
        name:"Data Structures",
        price:200,
        cat:"practicetests",
    },

    {
        id:43,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816917473-access-modifiers-this-super.svg",
        name:"Java Language",
        price:200,
        cat:"practicetests",
    },

    // companywise
    {
        id:44,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ibm.svg",
        name:"IBM",
        price:200,
        cat:"companywise",
    },

    {
        id:45,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hcl.svg",
        name:"HCL",
        price:200,
        cat:"companywise",
    },

    {
        id:46,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/zenser.svg",
        name:"ZenSar",
        price:200,
        cat:"companywise",
    },

    {
        id:47,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/accenture.svg",
        name:"accenture",
        price:200,
        cat:"companywise",
    },

    {
        id:48,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/techmahindra.svg",
        name:"TechMahindra",
        price:200,
        cat:"companywise",
    },

    {
        id:49,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/sap.svg",
        name:"SAP",
        price:200,
        cat:"companywise",
    },

    {
        id:50,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/samsung.svg",
        name:"SAMSUNG",
        price:200,
        cat:"companywise",
    },

    {
        id:51,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hsbc.svg",
        name:"HSBC",
        price:200,
        cat:"companywise",
    },

    {
        id:52,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/adobe.svg",
        name:"Adobe",
        price:200,
        cat:"companywise",
    },

    {
        id:53,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/honeywell.svg",
        name:"Honeywell",
        price:200,
        cat:"companywise",
    },

    {
        id:54,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/wipro.svg",
        name:"Wipro",
        price:200,
        cat:"companywise",
    },

    {
        id:55,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/oracle.svg",
        name:"ORACLE",
        price:200,
        cat:"companywise",
    },

    {
        id:56,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/mindtree.svg",
        name:"Mindtree",
        price:200,
        cat:"companywise",
    },

    {
        id:57,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/cognizant.svg",
        name:"Cognizant",
        price:200,
        cat:"companywise",
    },

    {
        id:58,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/dell.svg",
        name:"Dell",
        price:200,
        cat:"companywise",
    },

    {
        id:59,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/vmware.svg",
        name:"vmware",
        price:200,
        cat:"companywise",
    },

    {
        id:60,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/deloitte.svg",
        name:"Deloitte",
        price:200,
        cat:"companywise",
    },

    {
        id:61,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/virtusa.svg",
        name:"virtusa",
        price:200,
        cat:"companywise",
    },

    {
        id:62,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/google.svg",
        name:"Google",
        price:200,
        cat:"companywise",
    },

    {
        id:63,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/infosys.svg",
        name:"Infosys",
        price:200,
        cat:"companywise",
    },

    {
        id:64,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/amazon.svg",
        name:"amazon",
        price:200,
        cat:"companywise",
    },

    {
        id:65,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ericsson.svg",
        name:"ERICSSON",
        price:200,
        cat:"companywise",
    },

    {
        id:66,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/tcs.svg",
        name:"TATA CONSULTANCY SERVICES",
        price:200,
        cat:"companywise",
    },

    {
        id:67,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/mcafee.svg",
        name:"MCAFEE",
        price:200,
        cat:"companywise",
    },


    // video tutorials

    {
        id:68,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png",
        name:"Competitive Programming",
        text:"Competitive Programming questions solved by top rated cooders",
        cat:"videotutorials",
    },

    {
        id:69,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_interview.png",
        name:"Interview Preparation",
        text:"Commonly asked coding interview questions solved step by step",
        cat:"videotutorials",
    },

    {
        id:70,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png",
        name:"Data Structures and Algorithms",
        text:"Basic concepts of Data Structures and Algo and Ds/Algo problems solved",
        cat:"videotutorials",
    },

    {
        id:71,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_aptitude.png",
        name:"Aptitude",
        text:"Aptitude practice questions and puzzles to boost your thinking brain",
        cat:"videotutorials",
    },

    {
        id:72,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_cpp.png",
        name:"C++ Programming",
        text:"Deep dive into the fundamentals of C++ programming",
        cat:"videotutorials",
    },

    {
        id:73,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_os.png",
        name:"Operating System",
        text:"Learn in-depth concepts of Operating Systems easily.",
        cat:"videotutorials",
    },
   
]

module.exports = {mockTests}