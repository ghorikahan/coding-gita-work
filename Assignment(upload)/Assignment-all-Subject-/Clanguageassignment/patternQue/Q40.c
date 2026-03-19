
#include <stdio.h>

int main()
{
    int i, j, n;
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i + j == n + 1 || i == n)
            {
                printf("*");
            }

            else
            {
                printf(" ");
            }
        }
        for (j = n - 1; j >= 1; j--)
        {
            if (i + j == n + 1 || i == n)
            {
                printf("*");
            }

            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}