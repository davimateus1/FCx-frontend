import { Tag, TagProps, Text, TextProps } from '@chakra-ui/react';

type TagItemProps = {
  label: string;
  minValue: string;
  maxValue: string;
  isSelected: boolean;
  onTagSelect: (minValue: string, maxValue: string) => void;
  labelProps?: TextProps;
} & TagProps;

export const TagItem = ({
  label,
  minValue,
  maxValue,
  isSelected,
  onTagSelect,
  labelProps = {},
  ...rest
}: TagItemProps): JSX.Element => {
  const handleTagClick = () => {
    onTagSelect(minValue, maxValue);
  };

  return (
    <Tag
      cursor='pointer'
      minW='max-content'
      p='0 1.5rem'
      borderRadius='2rem'
      h='4rem'
      bg={isSelected ? 'primary.100' : 'primary.50'}
      onClick={handleTagClick}
      transition='all 0.2s ease-in-out'
      {...rest}
    >
      <Text
        fontSize='sm'
        align='center'
        noOfLines={2}
        color='white'
        whiteSpace='nowrap'
        {...labelProps}
      >
        {label}
      </Text>
    </Tag>
  );
};
