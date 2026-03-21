/*Q6
Write a program to input three floats as sides of a potential rectangle (length, width, diagonal) and check if it forms a valid rectangle (diagonal satisfies Pythagoras within a tolerance of 0.1). If valid:

If length == width: print "Square"
Else: print "Rectangle" Otherwise print "Invalid".*/
#include<stdio.h>
int main(){
    float leg,wid,dia;
    scanf("%d %d %d",&leg,&wid,&dia);
    if(leg*leg+wid*wid==dia*dia || leg*leg+wid*wid== 0.1+dia*dia || leg*leg+wid*wid==dia*dia-0.1){
        printf("This is valid rectangle");
    }
    else if (leg == wid){
        printf("square");
    }
    else {
        printf("enter valid sides");
    }



    return 0;
}