/*Q1.
Write a program to input two integers and print their difference. Check if the difference is greater than 50.
ans:-*/
 #include <stdio.h>
 int main()
{int a,b,d;
    scanf("%d %d",&a,&b);
    if(a<b){
        d=b-a;
        
    }
    else{
        d=a-b;
    }
     
    if(d>50){
        printf("%d is greater than 50",d);
    }
    else{
        printf("%d is less than 50",d);
    }

      
    return 0;
}