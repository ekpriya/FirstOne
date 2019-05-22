function thousands_separators()
  {
  	var num = parseInt(document.getElementById("Text1").value);
           console.log(num);
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result=num_parts.join(".");
    console.log(result);
    document.getElementById("textresult").value = result; 
  }

/*console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));*/