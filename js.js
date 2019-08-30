let exampleOut = `
export const #userObj = {
  /**
   * get value by key
   * @param {*} keyObj: key data
   * @param {*} data: obj
   * @param {*} defaultVale: value when empty
   */
  valueByKey: function(keyObj, data, defaultVale = '') {
    if (data[keyObj]) {
      return data[keyObj];
    } else {
      return defaultVale;
    }
  },
  keyObj: {
#key
  },
};`;

function getData(){
	let inputText = document.getElementById("inputJson").value;
	try 
	{
		let inputJson = JSON.parse(inputText)
		var keys = [];
		for(var k in inputJson) keys.push(k);

		let outKey = "";
		keys.forEach(item => {
			outKey = outKey + "    " + item + ": '"+ item + "',\n";
		});

		let NameObj = document.getElementById("objName").value;
		let jsonOut = exampleOut.replace("#userObj",NameObj)
		jsonOut = jsonOut.replace("#key",outKey)
		// 
		console.log(jsonOut);
	}
	catch
	{
		//document.getElementById("outputJson").value = "looix";
	}
	//console.log(jsonout);
}