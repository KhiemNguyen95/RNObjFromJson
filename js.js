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
	let NameObj = document.getElementById("objName").value;
		// 
	consoleJson(NameObj,inputText)
}

function consoleJson(nameObj,dataIn){
	try 
	{
		let inputJson = JSON.parse(dataIn)
		//get key
		var keys = [];
		for(var k in inputJson) keys.push(k);
		if (keys.length == 0) {
			return
		}
		// out put param
		let outKey = "";
		keys.forEach(item => {
			outKey = outKey + "    " + item + ": '"+ item + "',\n";
			consoleJson(item,inputJson[item]);
		});
		//fill data to example
		let jsonOut = exampleOut
		jsonOut = jsonOut.replace("#userObj",nameObj)
		jsonOut = jsonOut.replace("#key",outKey)
		// log result
		console.log("name obj:" + nameObj + ".js")
		console.log(jsonOut);
	}
	catch (err) 
	{
		//console.log(err);
	}
}