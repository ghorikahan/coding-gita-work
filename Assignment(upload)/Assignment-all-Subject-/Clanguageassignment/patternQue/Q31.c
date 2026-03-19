
#include <stdio.h>

int main()
{
    int i, j, n;

    scanf("%d", &n);
    char star = '*';

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == 1 || j == n)
            {
                printf("%c", star);
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