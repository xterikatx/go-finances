export interface Category {
  name: string;
  icon: string;
}

export interface DataProps {
  id: string;
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export interface TransactionProps {
  type: "positive" | "negative";
}

export interface Props {
  data: DataProps;
}
