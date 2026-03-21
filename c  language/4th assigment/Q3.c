/*Q3
Write a program to input four integers and find the second largest among them using nested if–else statements.*/
#include <stdio.h>
int main()
{
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    if (a > b && a > c && a > d)
    {
        if (b > c && b > d)
        {
            printf("%d is the 2nd largest value", b);
        }
        else if (c > b && c > d)
        {
            printf("%d is the 2nd largest value", c);
        }
        else
        {
            printf("%d is the 2nd largest value", d);
        }
    }
    else if (b > a && b > c && b > d)
    {
        if (a > c && a > d)
        {
            printf("%d is the 2nd largest value", a);
        }
        else if (c > a && c > d)
        {
            printf("%d is the 2nd largest value", c);
        }
        else
        {
            printf("%d is the 2nd largest value", d);
        }
    }
    else if (c > a && c > b && c > d)
    {
        if (a > b && a > d)
        {
            printf("%d is the 2nd largest value", a);
        }
        else if (b > d && b > a)
        {
            printf("%d is the 2nd largest value", b);
        }
        else
        {
            printf("%d is the 2nd largest value", d);
        }
    }
    else if (d > a && d > b && d > c)
    {
        if (a > b && a > c)
        {
            printf("%d is the 2nd largest value", a);
        }
        else if (b > c && b > a)
        {
            printf("%d is the 2nd largest value", b);
        }
        else
        {
            printf("%d is the 2nd largest value", c);
        }
    }
    else
    {
        printf("%d %d %d %d all are equal values", a, b, c, d);
    }
    return 0;
}