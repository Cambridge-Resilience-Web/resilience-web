import {
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { memo } from 'react';
import { HiOutlineSearch, HiPlus } from 'react-icons/hi';

const TableActions = ({
	filterValue,
	onFilterChange,
	openListingCreationDialog,
}) => {
	const { data: session } = useSession();

	return (
		<Stack
			direction={{
				base: 'column',
				md: 'row',
			}}
			spacing="4"
			justify="flex-end"
			flex="1"
			w={{
				base: 'full',
				md: 'auto',
			}}
		>
			{session?.user?.admin && (
				<>
					<HStack>
						<FormControl id="search">
							<InputGroup size="sm">
								<FormLabel srOnly>Filter by title</FormLabel>
								<InputLeftElement
									pointerEvents="none"
									color="gray.400"
									fontSize="xl"
								>
									<HiOutlineSearch />
								</InputLeftElement>
								<Input
									placeholder="Filter by title…"
									onChange={onFilterChange}
									style={{
										backgroundColor: '#ffffff',
									}}
									rounded="base"
									value={filterValue}
								/>
							</InputGroup>
						</FormControl>

						{/* TODO: Add filtering by categories (multiselect?) */}
						{/* <Select
						w={{
							base: '300px',
							md: 'unset',
						}}
						rounded="base"
						size="sm"
						placeholder="All roles"
					>
						<option>All roles</option>
					</Select> */}
					</HStack>
					<ButtonGroup size="sm" variant="outline">
						<Button
							bg="rw.700"
							colorScheme="rw.700"
							iconSpacing="1"
							leftIcon={<HiPlus fontSize="1.25em" />}
							onClick={openListingCreationDialog}
							variant="solid"
							_hover={{ bg: 'rw.900' }}
						>
							New listing
						</Button>
					</ButtonGroup>
				</>
			)}
		</Stack>
	);
};

export default memo(TableActions);