import { Box, IconButton, Button, Stack, ButtonGroup } from "@chakra-ui/core";

interface PaginateProps {
  current: number;
  total: number;
  onChange: (pageNumber: number) => void;
}

const Pagination = ({ current, onChange, total }: PaginateProps) => {
  const paginateButtons: JSX.Element[] = [];

  for (let page = current - 4; page < current + 5; page++) {
    if (page > total) {
      break;
    }
    if (page < 1) {
      continue;
    }

    paginateButtons.push(
      <Button
        data-testid="paginate-button"
        key={page}
        variant={page !== current ? "ghost" : undefined}
        onClick={() => onChange(page)}
      >
        {page}
      </Button>
    );
  }

  return (
    <Box mt="auto">
      <Stack spacing={5} isInline alignItems="center">
        <IconButton
          data-testid="first-paginate-button"
          icon="arrow-left"
          aria-label="1"
          isDisabled={current - 4 <= 1}
          onClick={() => onChange(1)}
        />
        <ButtonGroup spacing={0}>{paginateButtons}</ButtonGroup>
      </Stack>
    </Box>
  );
};
