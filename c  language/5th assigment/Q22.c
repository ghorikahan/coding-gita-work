/*Q22. Write a program using a while loop to print squares of numbers from 1 to 5. */
#include <stdio.h>
int main()
{
    int a = 1, square;
    while (a <= 5)
    {
        square = a * a;
        printf("%d\n", square);
        a++;
    }

    return 0;
}