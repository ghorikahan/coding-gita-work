
#include <stdio.h>

int main()
{

    int i, j, n;
    char star = '*';

    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {

            if (j >= i)
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