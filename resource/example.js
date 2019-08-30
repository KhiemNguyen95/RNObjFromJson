export const #nameObj = {
  /**
   * get value by key for #nameObj
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
};