/*Q21. Write a program using a while loop to print numbers from 1 to a given number entered by the user. */
#include<stdio.h>
int main(){
    int a=1,b;
    scanf("%d",&b);
    while ( a<=b)
    {
        printf("%d\n",a);
        a++;
    }
    
    return 0;
}