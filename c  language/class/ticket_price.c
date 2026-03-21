#include <stdio.h>

int main()

{
    int age;
    scanf("%d",&age);
    if (age <= 5)
    {
        printf("free ticket");
    }
    else if (age <= 12)
    {
        printf("12 rupees");
    }
    else if (age <= 60)
    {
        printf("100 rupees");
    }
    else
    {
        printf("70 rupees");
    }

    return 0;
}