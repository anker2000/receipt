function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function transformMatrixToArray(matrix) {
	return matrix.replace("matrix(","").replace(")","").split(",");
}
function hasParentWithClass(obj, className) {
	if (obj.tagName=="BODY") {
		return false;
	}
	if ($(obj).hasClass(className)) {
		return true;
	} else {
		return hasParentWithClass(obj.parentNode,className);
	}
}
