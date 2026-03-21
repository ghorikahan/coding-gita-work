/*Q7.
Write a program to create a simple calculator that performs addition, subtraction, multiplication, and division based on the user's choice.
ans:-*/
#include <stdio.h>
int main(){
    float a,b,c;
     char d;
     scanf("%f %c %f",&a,&d,&b);
    if(d=='+'){
        c=a+b;
        printf("the ans is %f",c);
    }
    else if(d=='-'){
        c=a-b;
        printf("the ans is %f",c);
    }
    else if(d=='/'){
        c=a/b;
        if(b!=0){
            printf("the ans is %f",c);
        }
        else{
            printf("you dont khow maths first learn it than come");
        }
    }
    else if(d=='*'){
        
        printf("the ans is %f",c);
    }
    else{
        printf(" enter valid operater");
    }

    
     


    return 0;
}