#include<stdio.h>
int main(){
    int a,b,c,d,e;
    scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
    int result = (a+b+c+d+e) /5;
if(result >=90){
    printf("outstanding");

}
else if(result >=70){
    printf("consitent");
}
else if(result >=50){
    printf("passable");
}
else{
    printf("need improvement");
}
    return 0;
}