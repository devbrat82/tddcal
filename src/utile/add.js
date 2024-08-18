function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    const numArray = numbers.split(delimiter).map(Number);
  
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  export default add;
  