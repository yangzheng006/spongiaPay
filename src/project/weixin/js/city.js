var citys;
function initCity() {
	citys = [
		{id:"1792",name:"随州",status:"none",phonetic:"s",tag:0}
		,{id:"3072",name:"海西",status:"none",phonetic:"h",tag:0}
		,{id:"1281",name:"新余",status:"none",phonetic:"x",tag:0}
		,{id:"514",name:"丹东",status:"none",phonetic:"d",tag:0}
		,{id:"770",name:"黑河",status:"none",phonetic:"h",tag:0}
		,{id:"2050",name:"河源",status:"none",phonetic:"h",tag:0}
		,{id:"2307",name:"攀枝花",status:"none",phonetic:"p",tag:0}
		,{id:"1284",name:"鹰潭",status:"none",phonetic:"y",tag:0}
		,{id:"1540",name:"洛阳",status:"none",phonetic:"l",tag:0}
		,{id:"1796",name:"恩施",status:"none",phonetic:"e",tag:0}
		,{id:"1029",name:"合肥",status:"none",phonetic:"h",tag:0}
		,{id:"2822",name:"铜川",status:"none",phonetic:"t",tag:0}
		,{id:"2567",name:"黔南",status:"none",phonetic:"q",tag:0}
		,{id:"3079",name:"银川",status:"none",phonetic:"y",tag:0}
		,{id:"1288",name:"赣州",status:"none",phonetic:"g",tag:0}
		,{id:"521",name:"锦州",status:"none",phonetic:"j",tag:0}
		,{id:"777",name:"绥化",status:"none",phonetic:"s",tag:0}
		,{id:"2057",name:"阳江",status:"none",phonetic:"y",tag:0}
		,{id:"2313",name:"泸州",status:"none",phonetic:"l",tag:0}
		,{id:"2827",name:"宝鸡",status:"none",phonetic:"b",tag:0}
		,{id:"2062",name:"清远",status:"none",phonetic:"q",tag:0}
		,{id:"3086",name:"石嘴山",status:"none",phonetic:"s",tag:0}
		,{id:"1039",name:"芜湖",status:"none",phonetic:"w",tag:0}
		,{id:"529",name:"营口",status:"none",phonetic:"y",tag:0}
		,{id:"2321",name:"德阳",status:"none",phonetic:"d",tag:0}
		,{id:"1810",name:"长沙",status:"none",phonetic:"z",tag:0}
		,{id:"3090",name:"吴忠",status:"none",phonetic:"w",tag:0}
		,{id:"788",name:"大兴安岭",status:"none",phonetic:"d",tag:0}
		,{id:"1556",name:"平顶山",status:"none",phonetic:"p",tag:0}
		,{id:"2581",name:"昆明",status:"none",phonetic:"k",tag:0}
		,{id:"2071",name:"东莞",status:"none",phonetic:"d",tag:0}
		,{id:"536",name:"阜新",status:"none",phonetic:"f",tag:0}
		,{id:"1048",name:"蚌埠",status:"none",phonetic:"b",tag:0}
		,{id:"2072",name:"中山",status:"none",phonetic:"z",tag:0}
		,{id:"2328",name:"绵阳",status:"none",phonetic:"m",tag:0}
		,{id:"2840",name:"咸阳",status:"none",phonetic:"x",tag:0}
		,{id:"3096",name:"固原",status:"none",phonetic:"g",tag:0}
		,{id:"2073",name:"潮州",status:"none",phonetic:"c",tag:0}
		,{id:"1307",name:"吉安",status:"none",phonetic:"j",tag:0}
		,{id:"1820",name:"株洲",status:"none",phonetic:"z",tag:0}
		,{id:"2077",name:"揭阳",status:"none",phonetic:"j",tag:0}
		,{id:"3102",name:"中卫",status:"none",phonetic:"z",tag:0}
		,{id:"1567",name:"安阳",status:"none",phonetic:"a",tag:0}
		,{id:"544",name:"辽阳",status:"none",phonetic:"l",tag:0}
		,{id:"1056",name:"淮南",status:"none",phonetic:"h",tag:0}
		,{id:"2338",name:"广元",status:"none",phonetic:"g",tag:0}
		,{id:"2083",name:"云浮",status:"none",phonetic:"y",tag:0}
		,{id:"2596",name:"曲靖",status:"none",phonetic:"q",tag:0}
		,{id:"1830",name:"湘潭",status:"none",phonetic:"x",tag:0}
		,{id:"1063",name:"马鞍山",status:"none",phonetic:"m",tag:0}
		,{id:"2855",name:"渭南",status:"none",phonetic:"w",tag:0}
		,{id:"552",name:"盘锦",status:"none",phonetic:"p",tag:0}
		,{id:"1321",name:"宜春",status:"none",phonetic:"y",tag:0}
		,{id:"1577",name:"鹤壁",status:"none",phonetic:"h",tag:0}
		,{id:"2090",name:"南宁",status:"none",phonetic:"n",tag:0}
		,{id:"2346",name:"遂宁",status:"none",phonetic:"s",tag:0}
		,{id:"811",name:"南京",status:"none",phonetic:"n",tag:0}
		,{id:"1836",name:"衡阳",status:"none",phonetic:"h",tag:0}
		,{id:"557",name:"铁岭",status:"none",phonetic:"t",tag:0}
		,{id:"1070",name:"淮北",status:"none",phonetic:"h",tag:0}
		,{id:"2606",name:"玉溪",status:"none",phonetic:"y",tag:0}
		,{id:"1583",name:"新乡",status:"none",phonetic:"x",tag:0}
		,{id:"2352",name:"内江",status:"none",phonetic:"n",tag:0}
		,{id:"1075",name:"铜陵",status:"none",phonetic:"t",tag:0}
		,{id:"2867",name:"延安",status:"none",phonetic:"y",tag:0}
		,{id:"1332",name:"抚州",status:"none",phonetic:"f",tag:0}
		,{id:"565",name:"朝阳",status:"none",phonetic:"c",tag:0}
		,{id:"2358",name:"乐山",status:"none",phonetic:"l",tag:0}
		,{id:"2103",name:"柳州",status:"none",phonetic:"l",tag:0}
		,{id:"1080",name:"安庆",status:"none",phonetic:"a",tag:0}
		,{id:"2616",name:"保山",status:"none",phonetic:"b",tag:0}
		,{id:"825",name:"无锡",status:"none",phonetic:"w",tag:0}
		,{id:"1849",name:"邵阳",status:"none",phonetic:"s",tag:0}
		,{id:"1596",name:"焦作",status:"none",phonetic:"j",tag:0}
		,{id:"573",name:"葫芦岛",status:"none",phonetic:"h",tag:0}
		,{id:"2622",name:"昭通",status:"none",phonetic:"z",tag:0}
		,{id:"1344",name:"上饶",status:"none",phonetic:"s",tag:0}
		,{id:"2881",name:"汉中",status:"none",phonetic:"h",tag:0}
		,{id:"834",name:"徐州",status:"none",phonetic:"x",tag:0}
		,{id:"2114",name:"桂林",status:"none",phonetic:"g",tag:0}
		,{id:"2370",name:"南充",status:"none",phonetic:"n",tag:0}
		,{id:"1092",name:"黄山",status:"none",phonetic:"h",tag:0}
		,{id:"581",name:"长春",status:"none",phonetic:"z",tag:0}
		,{id:"1862",name:"岳阳",status:"none",phonetic:"y",tag:0}
		,{id:"1607",name:"濮阳",status:"none",phonetic:"p",tag:0}
		,{id:"2634",name:"丽江",status:"none",phonetic:"l",tag:0}
		,{id:"2380",name:"眉山",status:"none",phonetic:"m",tag:0}
		,{id:"845",name:"常州",status:"none",phonetic:"c",tag:0}
		,{id:"2893",name:"榆林",status:"none",phonetic:"y",tag:0}
		,{id:"334",name:"汾西",status:"none",phonetic:"f",tag:0}
		,{id:"1358",name:"济南",status:"none",phonetic:"j",tag:0}
		,{id:"1614",name:"许昌",status:"none",phonetic:"x",tag:0}
		,{id:"592",name:"吉林",status:"none",phonetic:"j",tag:0}
		,{id:"1872",name:"常德",status:"none",phonetic:"c",tag:0}
		,{id:"2640",name:"普洱",status:"none",phonetic:"p",tag:0}
		,{id:"337",name:"吕梁",status:"none",phonetic:"l",tag:0}
		,{id:"2387",name:"宜宾",status:"none",phonetic:"y",tag:0}
		,{id:"2132",name:"梧州",status:"none",phonetic:"w",tag:0}
		,{id:"853",name:"苏州",status:"none",phonetic:"s",tag:0}
		,{id:"1109",name:"阜阳",status:"none",phonetic:"f",tag:0}
		,{id:"1621",name:"漯河",status:"none",phonetic:"l",tag:0}
		,{id:"1369",name:"青岛",status:"none",phonetic:"q",tag:0}
		,{id:"3161",name:"克孜勒苏",status:"none",phonetic:"k",tag:0}
		,{id:"602",name:"四平",status:"none",phonetic:"s",tag:0}
		,{id:"1882",name:"张家界",status:"none",phonetic:"z",tag:0}
		,{id:"2906",name:"安康",status:"none",phonetic:"a",tag:0}
		,{id:"1627",name:"三门峡",status:"none",phonetic:"s",tag:0}
		,{id:"2651",name:"临沧",status:"none",phonetic:"l",tag:0}
		,{id:"2140",name:"北海",status:"none",phonetic:"b",tag:0}
		,{id:"1118",name:"宿州",status:"none",phonetic:"s",tag:0}
		,{id:"2398",name:"广安",status:"none",phonetic:"g",tag:0}
		,{id:"3166",name:"喀什",status:"none",phonetic:"k",tag:0}
		,{id:"863",name:"南通",status:"none",phonetic:"n",tag:0}
		,{id:"1887",name:"益阳",status:"none",phonetic:"y",tag:0}
		,{id:"352",name:"呼和浩特",status:"none",phonetic:"h",tag:0}
		,{id:"609",name:"辽源",status:"none",phonetic:"l",tag:0}
		,{id:"2145",name:"防城港",status:"none",phonetic:"f",tag:0}
		,{id:"1634",name:"南阳",status:"none",phonetic:"n",tag:0}
		,{id:"2404",name:"达州",status:"none",phonetic:"d",tag:0}
		,{id:"2660",name:"楚雄",status:"none",phonetic:"c",tag:0}
		,{id:"2917",name:"商洛",status:"none",phonetic:"s",tag:0}
		,{id:"614",name:"通化",status:"none",phonetic:"t",tag:0}
		,{id:"1382",name:"淄博",status:"none",phonetic:"z",tag:0}
		,{id:"1894",name:"郴州",status:"none",phonetic:"c",tag:0}
		,{id:"2150",name:"钦州",status:"none",phonetic:"q",tag:0}
		,{id:"872",name:"连云港",status:"none",phonetic:"l",tag:0}
		,{id:"362",name:"包头",status:"none",phonetic:"b",tag:0}
		,{id:"2155",name:"贵港",status:"none",phonetic:"g",tag:0}
		,{id:"1132",name:"亳州",status:"none",phonetic:"b",tag:0}
		,{id:"2412",name:"雅安",status:"none",phonetic:"y",tag:0}
		,{id:"622",name:"白山",status:"none",phonetic:"b",tag:0}
		,{id:"2926",name:"兰州",status:"none",phonetic:"l",tag:0}
		,{id:"1391",name:"枣庄",status:"none",phonetic:"z",tag:0}
		,{id:"2671",name:"红河",status:"none",phonetic:"h",tag:0}
		,{id:"880",name:"淮安",status:"none",phonetic:"h",tag:0}
		,{id:"1648",name:"商丘",status:"none",phonetic:"s",tag:0}
		,{id:"1137",name:"池州",status:"none",phonetic:"c",tag:0}
		,{id:"2161",name:"玉林",status:"none",phonetic:"y",tag:0}
		,{id:"1906",name:"永州",status:"none",phonetic:"y",tag:0}
		,{id:"372",name:"乌海",status:"none",phonetic:"w",tag:0}
		,{id:"3188",name:"伊犁",status:"none",phonetic:"y",tag:0}
		,{id:"629",name:"松原",status:"none",phonetic:"s",tag:0}
		,{id:"2421",name:"巴中",status:"none",phonetic:"b",tag:0}
		,{id:"1142",name:"宣城",status:"none",phonetic:"x",tag:0}
		,{id:"1398",name:"东营",status:"none",phonetic:"d",tag:0}
		,{id:"1399",name:"东营",status:"none",phonetic:"d",tag:0}
		,{id:"2935",name:"嘉峪关",status:"none",phonetic:"j",tag:0}
		,{id:"376",name:"赤峰",status:"none",phonetic:"c",tag:0}
		,{id:"2168",name:"百色",status:"none",phonetic:"b",tag:0}
		,{id:"2936",name:"金昌",status:"none",phonetic:"j",tag:0}
		,{id:"889",name:"盐城",status:"none",phonetic:"y",tag:0}
		,{id:"1658",name:"信阳",status:"none",phonetic:"x",tag:0}
		,{id:"2426",name:"资阳",status:"none",phonetic:"z",tag:0}
		,{id:"635",name:"白城",status:"none",phonetic:"b",tag:0}
		,{id:"2939",name:"白银",status:"none",phonetic:"b",tag:0}
		,{id:"1404",name:"烟台",status:"none",phonetic:"y",tag:0}
		,{id:"2685",name:"文山",status:"none",phonetic:"w",tag:0}
		,{id:"1918",name:"怀化",status:"none",phonetic:"h",tag:0}
		,{id:"1151",name:"福州",status:"none",phonetic:"f",tag:0}
		,{id:"2431",name:"阿坝",status:"none",phonetic:"a",tag:0}
		,{id:"3199",name:"塔城",status:"none",phonetic:"t",tag:0}
		,{id:"641",name:"延边",status:"none",phonetic:"y",tag:0}
		,{id:"2945",name:"天水",status:"none",phonetic:"t",tag:0}
		,{id:"899",name:"扬州",status:"none",phonetic:"y",tag:0}
		,{id:"389",name:"通辽",status:"none",phonetic:"t",tag:0}
		,{id:"1669",name:"周口",status:"none",phonetic:"z",tag:0}
		,{id:"2181",name:"贺州",status:"none",phonetic:"h",tag:0}
		,{id:"2694",name:"西双版纳",status:"none",phonetic:"x",tag:0}
		,{id:"1417",name:"潍坊",status:"none",phonetic:"w",tag:0}
		,{id:"2953",name:"武威",status:"none",phonetic:"w",tag:0}
		,{id:"906",name:"镇江",status:"none",phonetic:"z",tag:0}
		,{id:"2186",name:"河池",status:"none",phonetic:"h",tag:0}
		,{id:"2698",name:"大理",status:"none",phonetic:"d",tag:0}
		,{id:"651",name:"哈尔滨",status:"none",phonetic:"h",tag:0}
		,{id:"1931",name:"娄底",status:"none",phonetic:"l",tag:0}
		,{id:"1165",name:"厦门",status:"none",phonetic:"s",tag:0}
		,{id:"2445",name:"甘孜",status:"none",phonetic:"g",tag:0}
		,{id:"398",name:"鄂尔多斯",status:"none",phonetic:"e",tag:0}
		,{id:"2958",name:"张掖",status:"none",phonetic:"z",tag:0}
		,{id:"1680",name:"驻马店",status:"none",phonetic:"z",tag:0}
		,{id:"913",name:"泰州",status:"none",phonetic:"t",tag:0}
		,{id:"1937",name:"湘西",status:"none",phonetic:"x",tag:0}
		,{id:"1172",name:"莆田",status:"none",phonetic:"p",tag:0}
		,{id:"3220",name:"台北",status:"none",phonetic:"t",tag:0}
		,{id:"2965",name:"平凉",status:"none",phonetic:"p",tag:0}
		,{id:"3221",name:"高雄",status:"none",phonetic:"g",tag:0}
		,{id:"1430",name:"济宁",status:"none",phonetic:"j",tag:0}
		,{id:"2198",name:"来宾",status:"none",phonetic:"l",tag:0}
		,{id:"3222",name:"台南",status:"none",phonetic:"t",tag:0}
		,{id:"407",name:"呼伦贝尔",status:"none",phonetic:"h",tag:0}
		,{id:"2711",name:"德宏",status:"none",phonetic:"d",tag:0}
		,{id:"3223",name:"台中",status:"none",phonetic:"t",tag:0}
		,{id:"920",name:"宿迁",status:"none",phonetic:"s",tag:0}
		,{id:"2712",name:"瑞丽",status:"none",phonetic:"r",tag:0}
		,{id:"3224",name:"金门",status:"none",phonetic:"j",tag:0}
		,{id:"3225",name:"南投",status:"none",phonetic:"n",tag:0}
		,{id:"1178",name:"三明",status:"none",phonetic:"s",tag:0}
		,{id:"3226",name:"基隆",status:"none",phonetic:"j",tag:0}
		,{id:"1947",name:"广州",status:"none",phonetic:"g",tag:0}
		,{id:"3227",name:"新竹",status:"none",phonetic:"x",tag:0}
		,{id:"3228",name:"嘉义",status:"none",phonetic:"j",tag:0}
		,{id:"1693",name:"武汉",status:"none",phonetic:"w",tag:0}
		,{id:"2205",name:"崇左",status:"none",phonetic:"c",tag:0}
		,{id:"2717",name:"怒江",status:"none",phonetic:"n",tag:0}
		,{id:"2973",name:"酒泉",status:"none",phonetic:"j",tag:0}
		,{id:"3229",name:"新北",status:"none",phonetic:"x",tag:0}
		,{id:"670",name:"齐齐哈尔",status:"none",phonetic:"q",tag:0}
		,{id:"3230",name:"宜兰",status:"none",phonetic:"y",tag:0}
		,{id:"927",name:"杭州",status:"none",phonetic:"h",tag:0}
		,{id:"3231",name:"新竹",status:"none",phonetic:"x",tag:0}
		,{id:"2464",name:"凉山",status:"none",phonetic:"l",tag:0}
		,{id:"3232",name:"桃园",status:"none",phonetic:"t",tag:0}
		,{id:"3233",name:"苗栗",status:"none",phonetic:"m",tag:0}
		,{id:"2722",name:"迪庆",status:"none",phonetic:"d",tag:0}
		,{id:"3234",name:"彰化",status:"none",phonetic:"z",tag:0}
		,{id:"1443",name:"泰安",status:"none",phonetic:"t",tag:0}
		,{id:"3235",name:"嘉义",status:"none",phonetic:"j",tag:0}
		,{id:"3236",name:"云林",status:"none",phonetic:"y",tag:0}
		,{id:"421",name:"巴彦淖尔",status:"none",phonetic:"b",tag:0}
		,{id:"2981",name:"庆阳",status:"none",phonetic:"q",tag:0}
		,{id:"3237",name:"屏东",status:"none",phonetic:"p",tag:0}
		,{id:"2214",name:"海口",status:"none",phonetic:"h",tag:0}
		,{id:"3238",name:"台东",status:"none",phonetic:"t",tag:0}
		,{id:"1191",name:"泉州",status:"none",phonetic:"q",tag:0}
		,{id:"2727",name:"拉萨",status:"none",phonetic:"l",tag:0}
		,{id:"3239",name:"花莲",status:"none",phonetic:"h",tag:0}
		,{id:"1960",name:"韶关",status:"none",phonetic:"s",tag:0}
		,{id:"3240",name:"澎湖",status:"none",phonetic:"p",tag:0}
		,{id:"3241",name:"中正",status:"none",phonetic:"z",tag:0}
		,{id:"1450",name:"威海",status:"none",phonetic:"w",tag:0}
		,{id:"3242",name:"大同",status:"none",phonetic:"d",tag:0}
		,{id:"1707",name:"黄石",status:"none",phonetic:"h",tag:0}
		,{id:"2219",name:"三亚",status:"none",phonetic:"s",tag:0}
		,{id:"3243",name:"中山",status:"none",phonetic:"z",tag:0}
		,{id:"3244",name:"松山",status:"none",phonetic:"s",tag:0}
		,{id:"429",name:"乌兰察布",status:"none",phonetic:"w",tag:0}
		,{id:"941",name:"宁波",status:"none",phonetic:"n",tag:0}
		,{id:"3245",name:"大安",status:"none",phonetic:"d",tag:0}
		,{id:"2990",name:"定西",status:"none",phonetic:"d",tag:0}
		,{id:"3246",name:"万华",status:"none",phonetic:"w",tag:0}
		,{id:"687",name:"鸡西",status:"none",phonetic:"j",tag:0}
		,{id:"1455",name:"日照",status:"none",phonetic:"r",tag:0}
		,{id:"3247",name:"信义",status:"none",phonetic:"x",tag:0}
		,{id:"2736",name:"昌都",status:"none",phonetic:"c",tag:0}
		,{id:"3248",name:"士林",status:"none",phonetic:"s",tag:0}
		,{id:"3249",name:"北投",status:"none",phonetic:"b",tag:0}
		,{id:"1714",name:"十堰",status:"none",phonetic:"s",tag:0}
		,{id:"3250",name:"内湖",status:"none",phonetic:"n",tag:0}
		,{id:"1971",name:"深圳",status:"none",phonetic:"s",tag:0}
		,{id:"2483",name:"贵阳",status:"none",phonetic:"g",tag:0}
		,{id:"3251",name:"南港",status:"none",phonetic:"n",tag:0}
		,{id:"1204",name:"漳州",status:"none",phonetic:"z",tag:0}
		,{id:"1460",name:"莱芜",status:"none",phonetic:"l",tag:0}
		,{id:"3252",name:"文山",status:"none",phonetic:"w",tag:0}
		,{id:"2998",name:"陇南",status:"none",phonetic:"l",tag:0}
		,{id:"1463",name:"临沂",status:"none",phonetic:"l",tag:0}
		,{id:"3255",name:"新兴",status:"none",phonetic:"x",tag:0}
		,{id:"3256",name:"前金",status:"none",phonetic:"q",tag:0}
		,{id:"441",name:"兴安盟",status:"none",phonetic:"x",tag:0}
		,{id:"697",name:"鹤岗",status:"none",phonetic:"h",tag:0}
		,{id:"953",name:"温州",status:"none",phonetic:"w",tag:0}
		,{id:"3257",name:"芩雅",status:"none",phonetic:"q",tag:0}
		,{id:"1978",name:"珠海",status:"none",phonetic:"z",tag:0}
		,{id:"3258",name:"盐埕",status:"none",phonetic:"y",tag:0}
		,{id:"1723",name:"宜昌",status:"none",phonetic:"y",tag:0}
		,{id:"3259",name:"鼓山",status:"none",phonetic:"g",tag:0}
		,{id:"2748",name:"山南",status:"none",phonetic:"s",tag:0}
		,{id:"3260",name:"旗津",status:"none",phonetic:"q",tag:0}
		,{id:"701",name:"兴安",status:"none",phonetic:"x",tag:0}
		,{id:"3261",name:"前镇",status:"none",phonetic:"q",tag:0}
		,{id:"1982",name:"汕头",status:"none",phonetic:"s",tag:0}
		,{id:"2494",name:"六盘水",status:"none",phonetic:"l",tag:0}
		,{id:"3262",name:"三民",status:"none",phonetic:"s",tag:0}
		,{id:"3263",name:"左营",status:"none",phonetic:"z",tag:0}
		,{id:"448",name:"锡林郭勒",status:"none",phonetic:"x",tag:0}
		,{id:"1216",name:"南平",status:"none",phonetic:"n",tag:0}
		,{id:"3008",name:"临夏",status:"none",phonetic:"l",tag:0}
		,{id:"3264",name:"楠梓",status:"none",phonetic:"n",tag:0}
		,{id:"3265",name:"小港",status:"none",phonetic:"x",tag:0}
		,{id:"706",name:"双鸭山",status:"none",phonetic:"s",tag:0}
		,{id:"3266",name:"仁爱",status:"none",phonetic:"r",tag:0}
		,{id:"2499",name:"遵义",status:"none",phonetic:"z",tag:0}
		,{id:"3267",name:"信义",status:"none",phonetic:"x",tag:0}
		,{id:"1476",name:"德州",status:"none",phonetic:"d",tag:0}
		,{id:"3268",name:"中正",status:"none",phonetic:"z",tag:0}
		,{id:"965",name:"嘉兴",status:"none",phonetic:"j",tag:0}
		,{id:"3269",name:"中山",status:"none",phonetic:"z",tag:0}
		,{id:"1990",name:"佛山",status:"none",phonetic:"f",tag:0}
		,{id:"3270",name:"安乐",status:"none",phonetic:"a",tag:0}
		,{id:"3271",name:"暖暖",status:"none",phonetic:"n",tag:0}
		,{id:"3272",name:"七堵",status:"none",phonetic:"q",tag:0}
		,{id:"2761",name:"日喀则",status:"none",phonetic:"r",tag:0}
		,{id:"3017",name:"甘南",status:"none",phonetic:"g",tag:0}
		,{id:"3273",name:"中西",status:"none",phonetic:"z",tag:0}
		,{id:"715",name:"大庆",status:"none",phonetic:"d",tag:0}
		,{id:"1227",name:"龙岩",status:"none",phonetic:"l",tag:0}
		,{id:"1996",name:"江门",status:"none",phonetic:"j",tag:0}
		,{id:"461",name:"阿拉善",status:"none",phonetic:"a",tag:0}
		,{id:"973",name:"湖州",status:"none",phonetic:"h",tag:0}
		,{id:"3277",name:"安平",status:"none",phonetic:"a",tag:0}
		,{id:"3278",name:"安南",status:"none",phonetic:"a",tag:0}
		,{id:"1488",name:"聊城",status:"none",phonetic:"l",tag:0}
		,{id:"3281",name:"香山",status:"none",phonetic:"x",tag:0}
		,{id:"466",name:"沈阳",status:"none",phonetic:"s",tag:0}
		,{id:"2514",name:"安顺",status:"none",phonetic:"a",tag:0}
		,{id:"979",name:"绍兴",status:"none",phonetic:"s",tag:0}
		,{id:"1235",name:"宁德",status:"none",phonetic:"n",tag:0}
		,{id:"1747",name:"鄂州",status:"none",phonetic:"e",tag:0}
		,{id:"3027",name:"西宁",status:"none",phonetic:"x",tag:0}
		,{id:"2004",name:"湛江",status:"none",phonetic:"z",tag:0}
		,{id:"725",name:"伊春",status:"none",phonetic:"y",tag:0}
		,{id:"1751",name:"荆门",status:"none",phonetic:"j",tag:0}
		,{id:"3287",name:"北屯",status:"none",phonetic:"b",tag:0}
		,{id:"3288",name:"西屯",status:"none",phonetic:"x",tag:0}
		,{id:"1497",name:"滨州",status:"none",phonetic:"b",tag:0}
		,{id:"3289",name:"南屯",status:"none",phonetic:"n",tag:0}
		,{id:"986",name:"金华",status:"none",phonetic:"j",tag:0}
		,{id:"3035",name:"海东",status:"none",phonetic:"h",tag:0}
		,{id:"2780",name:"那曲",status:"none",phonetic:"n",tag:0}
		,{id:"1757",name:"孝感",status:"none",phonetic:"x",tag:0}
		,{id:"1246",name:"南昌",status:"none",phonetic:"n",tag:0}
		,{id:"2014",name:"茂名",status:"none",phonetic:"m",tag:0}
		,{id:"480",name:"大连",status:"none",phonetic:"d",tag:0}
		,{id:"3296",name:"九龙城",status:"none",phonetic:"j",tag:0}
		,{id:"1505",name:"菏泽",status:"none",phonetic:"h",tag:0}
		,{id:"3297",name:"油尖旺",status:"none",phonetic:"y",tag:0}
		,{id:"2530",name:"铜仁",status:"none",phonetic:"t",tag:0}
		,{id:"3042",name:"海北",status:"none",phonetic:"h",tag:0}
		,{id:"3298",name:"深水埗",status:"none",phonetic:"s",tag:0}
		,{id:"3299",name:"黄大仙",status:"none",phonetic:"h",tag:0}
		,{id:"996",name:"衢州",status:"none",phonetic:"q",tag:0}
		,{id:"3300",name:"观塘",status:"none",phonetic:"g",tag:0}
		,{id:"1765",name:"荆州",status:"none",phonetic:"j",tag:0}
		,{id:"2021",name:"肇庆",status:"none",phonetic:"z",tag:0}
		,{id:"3301",name:"中西",status:"none",phonetic:"z",tag:0}
		,{id:"743",name:"佳木斯",status:"none",phonetic:"j",tag:0}
		,{id:"2791",name:"阿里",status:"none",phonetic:"a",tag:0}
		,{id:"3047",name:"黄南",status:"none",phonetic:"h",tag:0}
		,{id:"1256",name:"景德镇",status:"none",phonetic:"j",tag:0}
		,{id:"2280",name:"成都",status:"none",phonetic:"c",tag:0}
		,{id:"3306",name:"大埔",status:"none",phonetic:"d",tag:0}
		,{id:"491",name:"鞍山",status:"none",phonetic:"a",tag:0}
		,{id:"1003",name:"舟山",status:"none",phonetic:"z",tag:0}
		,{id:"3307",name:"沙田",status:"none",phonetic:"s",tag:0}
		,{id:"1516",name:"郑州",status:"none",phonetic:"z",tag:0}
		,{id:"3052",name:"海南",status:"none",phonetic:"h",tag:0}
		,{id:"3308",name:"西贡",status:"none",phonetic:"x",tag:0}
		,{id:"1261",name:"萍乡",status:"none",phonetic:"p",tag:0}
		,{id:"2541",name:"黔西南",status:"none",phonetic:"q",tag:0}
		,{id:"3309",name:"元朗",status:"none",phonetic:"y",tag:0}
		,{id:"1774",name:"黄冈",status:"none",phonetic:"h",tag:0}
		,{id:"2030",name:"惠州",status:"none",phonetic:"h",tag:0}
		,{id:"3310",name:"屯门",status:"none",phonetic:"t",tag:0}
		,{id:"2799",name:"林芝",status:"none",phonetic:"l",tag:0}
		,{id:"3311",name:"荃湾",status:"none",phonetic:"q",tag:0}
		,{id:"1008",name:"台州",status:"none",phonetic:"t",tag:0}
		,{id:"3312",name:"葵青",status:"none",phonetic:"k",tag:0}
		,{id:"3313",name:"离岛",status:"none",phonetic:"l",tag:0}
		,{id:"754",name:"七台河",status:"none",phonetic:"q",tag:0}
		,{id:"3058",name:"果洛",status:"none",phonetic:"g",tag:0}
		,{id:"499",name:"抚顺",status:"none",phonetic:"f",tag:0}
		,{id:"1267",name:"九江",status:"none",phonetic:"j",tag:0}
		,{id:"2036",name:"梅州",status:"none",phonetic:"m",tag:0}
		,{id:"2550",name:"黔东南",status:"none",phonetic:"q",tag:0}
		,{id:"759",name:"牡丹江",status:"none",phonetic:"m",tag:0}
		,{id:"2808",name:"西安",status:"none",phonetic:"x",tag:0}
		,{id:"1529",name:"开封",status:"none",phonetic:"k",tag:0}
		,{id:"1785",name:"咸宁",status:"none",phonetic:"x",tag:0}
		,{id:"3065",name:"玉树",status:"none",phonetic:"y",tag:0}
		,{id:"1018",name:"丽水",status:"none",phonetic:"l",tag:0}
		,{id:"507",name:"本溪",status:"none",phonetic:"b",tag:0}
		,{id:"3323",name:"中国",status:"none",phonetic:"z",tag:0}
		,{id:"2300",name:"自贡",status:"none",phonetic:"z",tag:0}
		,{id:"3324",name:"滨湖区",status:"none",phonetic:"b",tag:0}
		,{id:"2045",name:"汕尾",status:"none",phonetic:"s",tag:0}
		,{id:"926",name:"浙江",status:"none",phonetic:"z",tag:0}
		,{id:"792",name:"上海",status:"none",phonetic:"s",tag:0}
		,{id:"1028",name:"安徽",status:"none",phonetic:"a",tag:0}
		,{id:"1",name:"北京",status:"none",phonetic:"b",tag:0}
		,{id:"1357",name:"山东",status:"none",phonetic:"s",tag:0}
		,{id:"219",name:"山西",status:"none",phonetic:"s",tag:0}
		,{id:"1515",name:"河南",status:"none",phonetic:"h",tag:0}
		,{id:"35",name:"河北",status:"none",phonetic:"h",tag:0}
		,{id:"2580",name:"云南",status:"none",phonetic:"y",tag:0}
		,{id:"2482",name:"贵州",status:"none",phonetic:"g",tag:0}
		,{id:"2279",name:"四川",status:"none",phonetic:"s",tag:0}
		,{id:"1946",name:"广东",status:"none",phonetic:"g",tag:0}
		,{id:"2089",name:"广西",status:"none",phonetic:"g",tag:0}
		,{id:"1150",name:"福建",status:"none",phonetic:"f",tag:0}
		,{id:"1245",name:"江西",status:"none",phonetic:"j",tag:0}
		,{id:"1809",name:"湖南",status:"none",phonetic:"h",tag:0}
		,{id:"1692",name:"湖北",status:"none",phonetic:"h",tag:0}
		,{id:"465",name:"辽宁",status:"none",phonetic:"l",tag:0}
		,{id:"580",name:"吉林",status:"none",phonetic:"j",tag:0}
		,{id:"650",name:"黑龙江",status:"none",phonetic:"h",tag:0}
		,{id:"2807",name:"陕西",status:"none",phonetic:"s",tag:0}
		,{id:"2925",name:"甘肃",status:"none",phonetic:"g",tag:0}
		,{id:"3078",name:"宁夏",status:"none",phonetic:"n",tag:0}
		,{id:"351",name:"内蒙古",status:"none",phonetic:"n",tag:0}
		,{id:"3026",name:"青海",status:"none",phonetic:"q",tag:0}
		,{id:"3106",name:"新疆",status:"none",phonetic:"x",tag:0}
		,{id:"2240",name:"重庆",status:"none",phonetic:"z",tag:0}
		,{id:"18",name:"天津",status:"none",phonetic:"t",tag:0}
		,{id:"2726",name:"西藏",status:"none",phonetic:"x",tag:0}
		,{id:"2213",name:"海南",status:"none",phonetic:"h",tag:0}
		,{id:"3292",name:"香港",status:"none",phonetic:"x",tag:0}
		,{id:"3314",name:"澳门",status:"none",phonetic:"a",tag:0}
		,{id:"3219",name:"台湾",status:"none",phonetic:"t",tag:0}
		,{id:"36",name:"石家庄",status:"none",phonetic:"s",tag:0}
		,{id:"60",name:"唐山",status:"none",phonetic:"t",tag:0}
		,{id:"75",name:"秦皇岛",status:"none",phonetic:"q",tag:0}
		,{id:"83",name:"邯郸",status:"none",phonetic:"h",tag:0}
		,{id:"103",name:"邢台",status:"none",phonetic:"x",tag:0}
		,{id:"123",name:"保定",status:"none",phonetic:"b",tag:0}
		,{id:"149",name:"张家口",status:"none",phonetic:"z",tag:0}
		,{id:"167",name:"承德",status:"none",phonetic:"c",tag:0}
		,{id:"179",name:"沧州",status:"none",phonetic:"c",tag:0}
		,{id:"196",name:"廊坊",status:"none",phonetic:"l",tag:0}
		,{id:"207",name:"衡水",status:"none",phonetic:"h",tag:0}
		,{id:"220",name:"太原",status:"none",phonetic:"t",tag:0}
		,{id:"231",name:"大同",status:"none",phonetic:"d",tag:0}
		,{id:"243",name:"阳泉",status:"none",phonetic:"y",tag:0}
		,{id:"249",name:"长治",status:"none",phonetic:"z",tag:0}
		,{id:"263",name:"晋城",status:"none",phonetic:"j",tag:0}
		,{id:"271",name:"朔州",status:"none",phonetic:"s",tag:0}
		,{id:"278",name:"晋中",status:"none",phonetic:"j",tag:0}
		,{id:"290",name:"运城",status:"none",phonetic:"y",tag:0}
		,{id:"304",name:"忻州",status:"none",phonetic:"x",tag:0}
		,{id:"319",name:"临汾",status:"none",phonetic:"l",tag:0}
		,{id:"3107",name:"乌鲁木齐",status:"none",phonetic:"w",tag:0}
		,{id:"3116",name:"克拉玛依",status:"none",phonetic:"k",tag:0}
		,{id:"3121",name:"吐鲁番",status:"none",phonetic:"t",tag:0}
		,{id:"3125",name:"哈密",status:"none",phonetic:"h",tag:0}
		,{id:"3129",name:"昌吉",status:"none",phonetic:"c",tag:0}
		,{id:"3137",name:"博尔塔拉",status:"none",phonetic:"b",tag:0}
		,{id:"3141",name:"巴音郭楞",status:"none",phonetic:"b",tag:0}
		,{id:"3151",name:"阿克苏",status:"none",phonetic:"a",tag:0}
		,{id:"3327",name:"滁州",status:"none",phonetic:"c",tag:0}
	]
}
function getAreas(phonetic) {
	var areas = [];
	for(var i=0;i<citys.length;i++)
	{
		if (citys[i].phonetic==phonetic) {
			areas.push(citys[i]);
		}
	}
	return areas;
}


function getTagAreas(status) {
	var areas = [];
	for(var i=0;i<citys.length;i++)
	{
		if (citys[i].status==status) {
			areas.push(citys[i]);
		}
	}
	return areas;
}


function getCityName(name){
	var areas = [];
	for(var i=0;i<citys.length;i++)
	{
		if (citys[i].name.indexOf(name)!= -1 ) {
			areas.push(citys[i]);
		}
	}
	console.log(areas);
	return areas;
}

