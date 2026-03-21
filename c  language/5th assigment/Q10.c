/*Q10. Write a program using a for loop to print the cube of numbers from 1 to 5.*/
#include <stdio.h>
int mian()
{
    int a;
    for (a = 1; a <= 5; a++)
    {
        int b = a * a * a;
        printf("%d\n", b);
    }

    return 0;
}