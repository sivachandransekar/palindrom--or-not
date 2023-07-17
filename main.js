var remeaingValue,temporyValue,result=0;
var number=prompt("Enter The Number");
document.write("Enter the Number is"+number+"<br>");
temporyValue=number;
while(number>0){
	remeaingValue=number%10;
	number=parseInt(number/10);
	result=result*10+remeaingValue;
}
if(result==temporyValue){
	
	document.write(result+"is Palindrome");
}
else{
	document.write(result+"is Not Palindrome");
}