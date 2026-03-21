/*Q4
Write a program to input an integer (assumed between 100 and 999) and check if the sum of its digits is divisible by the product of its digits. Handle zero digits carefully to avoid division by zero.*/
#include <stdio.h>
int main()
{
    int a;
      scanf("%d",&a);
    
    int Ld=a%10;
    int Fd=a/100;
    int Md=(a/10)%10;
    int sum=Fd+Md+Ld; 
    int pro=Fd*Md*Ld;
     int res=sum/pro;
    
    

    if(a>100 && a<999){
        if(pro!=0){
            printf(" the reslt will be %d",res);
        }
        else if(sum=0){
            printf("the ans will be zero");
        }
        else if(sum!=0 && pro!=0){
            printf("the result will be %d",res);
        }
        else if(pro=0){
            printf("prodct will be zero so no result");
        }
        else{
            printf("the number is invalid");
        }

    }
    else {
        printf("you have enterd a invalid variable, enter the number between 100 to 999");
    }
    return 0;
}