def linear_Search(array, search_Value)

    array.each_with_index do |element, index|

        if element == search_Value
            return index

        elsif element > search_value
            break
        end
    end
    return nil
end