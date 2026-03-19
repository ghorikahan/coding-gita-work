
#include <stdio.h>

int main()
{
    int i, j, n;
    scanf("%d", &n);
    int a = 2;
    for (i = 1; i <= n; i++)
    {

        for (j = 1; j <= n; j++)
        {

            if (i >= j)
            {
                printf("%d", a);
                a = a + 2;
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