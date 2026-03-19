#include <stdio.h>

int main()
{
	int i, j, n;
	char star = '*';
	scanf("%d", &n);

	for (i = n; i >= 1; i--)
	{
		for (int j = i; j < n; j++)
		{
			printf(" ");
		}
		for (j = 1; j <= i; j++)
		{
			printf("%c", star);
		}
		printf("\n");
	}

	return 0;
}