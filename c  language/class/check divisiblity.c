#include <stdio.h>
int main() 
{
    int a;
    scanf("%d",&a);
    if(a%2==0){
        if(a%4==0){
            printf(" %d is divisible by both 2 and 4",a);
        }
        else{
            printf("%d is divisible by 2 only ",a);
        }
    }
    else{
        printf("%d is not divisible by a",a);
    }
     
    return 0;
}