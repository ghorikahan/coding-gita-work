/*Q19. Write a program using a while loop to calculate the factorial of a given number.*/
#include <stdio.h>
int main()
{
    int a,b=1, fac = 1;
    scanf("%d", &a);
    while (b <= a)
    {
        fac = fac * b;
        b++;
    }
    printf("%d\n", fac);

    return 0;
}