import {
  Thead,
  Table as CTable,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Center,
  Text,
  Flex,
} from '@chakra-ui/react';
import {
  flexRender,
  getCoreRowModel,
  RowData,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';

type TableProps<TData extends RowData> = {
  columns: TableOptions<TData>['columns'];
  data: TData[];
  isLoading?: boolean;
  bgColor?: string;
  reactTableProps?: Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel'>;
};

export const Table = <TData extends Record<string, unknown>>({
  columns,
  data,
  isLoading,
  bgColor,
  reactTableProps = {},
}: TableProps<TData>): JSX.Element => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    ...reactTableProps,
  });

  return isLoading ? (
    <Flex direction='column' w='100%' align='center'>
      <Spinner size='md' color={bgColor} />
    </Flex>
  ) : (
    <Flex flexDir='column' w='100%'>
      <CTable w='100%'>
        <Thead position='sticky' top='0' m={0}>
          {getHeaderGroups().map((headerGroup) => (
            <Tr color='white' key={headerGroup.id} textAlign='left'>
              {headerGroup.headers.map((header, index) => {
                const columnHeader = header.column.columnDef.header;
                return (
                  <Th
                    px='2rem'
                    py='2.4rem'
                    borderLeft={index === 0 ? 'none' : '1px solid'}
                    borderLeftColor='gray.zeroOpacity20'
                    bgColor={bgColor}
                    textAlign='center'
                    alignSelf='center'
                    color='white'
                    _last={{
                      borderRadius: '0 1rem 1rem 0',
                    }}
                    _first={{
                      borderRadius: '1rem 0 0 1rem',
                    }}
                    textTransform='unset'
                    fontWeight='medium'
                    fontSize='md'
                    key={`${columnHeader}-${headerGroup.id}`}
                    w={header.getSize()}
                  >
                    {header.isPlaceholder ? null : flexRender(columnHeader, header.getContext())}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody height='100%'>
          {getRowModel().rows.map((row) => {
            return (
              <Tr key={`${row.id}-${row.original.id}`} bg='black.0'>
                {row.getVisibleCells().map((cell) => {
                  const columnCell = cell.column.columnDef.cell;

                  return (
                    <Td
                      textAlign='center'
                      alignSelf='center'
                      borderBottom='2.5px solid'
                      borderBottomColor='gray.zeroOpacity20'
                      fontSize='lg'
                      fontWeight={300}
                      py='1.5rem'
                      key={`${columnCell}-${cell.row.id}`}
                    >
                      {flexRender(columnCell, cell.getContext())}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </CTable>
      {data.length === 0 && (
        <Center mt='0.5rem'>
          <Text fontSize='xl' fontWeight='semibold' color={bgColor}>
            Nenhum dado encontrado...
          </Text>
        </Center>
      )}
    </Flex>
  );
};
