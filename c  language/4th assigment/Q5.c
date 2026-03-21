/*Q5
Write a program to input two floats representing coordinates (x, y) and determine the distance from origin:

Distance <= 5: print "Close"
Distance between 5 and 15: print "Medium"
Else: print "Far" Use if–else–if (use sqrt() if available, or approximate with conditions).*/

#include <stdio.h>
int main()
{
    float x, y;
    scanf("%f %f", &x, &y);
    float dis = x * x + y * y;
    if (dis <= 25)
    {
        printf("close");
    }
    else if (dis > 25 && dis < 225)
    {
        printf("Medium");
    }
    else
    {
        printf("Far");
    }

    return 0;
}