
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
            if (i + j == n + 1 || i == j)
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