
#include <stdio.h>

int main()
{
    int i, j, n;
    scanf("%d", &n);
    int a = n * (n + 1) / 2;
    for (i = 1; i <= n; i++)
    {

        for (j = 1; j <= n; j++)
        {

            if (i >= j)
            {
                printf("%d", a);
                a--;
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