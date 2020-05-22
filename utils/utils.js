function getJudgeKind(kind) {
    if ("cxcy_credit" === kind) {
      kind = "创新创业"
    } else if ("xl_credit" === kind) {
      kind = "身心素质"
    } else if ("sxdd_credit" === kind) {
      kind = "思想品德"
    } else if ("wt_credit" === kind) {
      kind = "文体素质"
    } else if ("fl_credit" === kind) {
      kind = "法律素养"
    }
    return kind;
}

function getDateTimeStamp(dateStr) {
  return Date.parse(dateStr.replace(/-/gi, "/"));
}

function getDateDiff(dateTimeStamp) {
  var result = null;
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}
module.exports = {
  getDateTimeStamp: getDateTimeStamp,
  getDateDiff: getDateDiff,
  getJudgeKind: getJudgeKind,
}