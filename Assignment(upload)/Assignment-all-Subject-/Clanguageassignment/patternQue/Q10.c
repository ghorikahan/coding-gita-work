 #include <stdio.h>

int main() {
    
    int i,j,n;
    scanf("%d",&n);
    char star = '*';
    
    for(i=0;i<=n;i++){
        for(j=0;j<=n;j++){
            if(i+j > n-1 ){
                printf("%c",star);
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}