
#include <stdio.h>

int main()
{
    int i, j, n;

    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d", j);
        }
        for (j = i - 1; j >= 1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }

    return 0;
}

// 2nd approch

// #include <stdio.h>

// int main()
// {
//     int i, j, n;

//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         int count = 0;
//         for (j = 1; j <= i * 2 - 1; j++)
//         {
//             if (j <= ((2 * i - 1) / 2) + 1)
//             {
//                 count++;
//                 printf("%d", count);
//             }
//             else
//             {
//                 count--;
//                 printf("%d", count);
//             }
//         }

//         printf("\n");
//     }

//     return 0;
// }