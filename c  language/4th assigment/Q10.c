#include <stdio.h>
int main()
{
    float units;
    scanf("%f", &units);
    float bill;
    if (units <= 0)
    {
        printf("Enter valid units");
    }
    else if (units <= 100)
    {
        bill = units * 5;
        printf("%f", bill);
    }
    else if (units > 100 && units <= 200)
    {
        bill = units * 7;
        printf("%f", bill);
    }
    else if (units > 200)
    {
         bill = units * 10;
        if (bill > 500 && units > 150)
        {
            printf("high consumption");
        }
        else
        {
            printf("Normal");
        }

        
        printf("%f", bill);
    }

    return 0;
}