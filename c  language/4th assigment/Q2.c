/*Q2
Write a program to input a float representing the pH value (0 to 14) and categorize it:

Acidic if < 7
Neutral if == 7
Basic if > 7 but <= 10
Strongly basic if > 10 Use if–else–if statements.*/
#include <stdio.h>
int main()
{
    float a;
    printf("enter the ph of the  solution:-");
    scanf("%f", &a);
    if (a < 7)
    {
        printf("the solution is acidic");
    }
    else if (a == 7)
    {
        printf("the solution is neutral");
    }
    else if (a > 7 && a <= 10)
    {
        printf("the solution is basic");
    }
    else if (a > 10)
    {
        printf("the soltion is highly basic");
    }
    else
    {
        printf("enter valid ph  between 0-14");
    }
    return 0;
}