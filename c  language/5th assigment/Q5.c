/*Q5. Write a program using a for loop to print the multiplication table of a given number.*/
#include <stdio.h>
int main()
{
    int a, c;
    scanf("%d", &a);
    for (c = 1; c <= 10; c++)
    {
        int b = c * a;
        printf("%d", b);
    }

    return 0;
}