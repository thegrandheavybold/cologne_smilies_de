module.exports=function(t){const e=require("moment");return t.addPassthroughCopy("./src/assets"),t.ignores.add("./src/admin"),t.addNunjucksFilter("date",(function(t,r,a){return a=a||"de",e.locale(a),e(t).format(r)})),t.addShortcode("year",(()=>`${(new Date).getFullYear()}`)),{dir:{input:"src",output:"dist",data:"_data"}}};