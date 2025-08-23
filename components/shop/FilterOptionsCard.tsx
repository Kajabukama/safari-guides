"use client";
import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  category: z.string(),
  priceRange: z.tuple([z.number(), z.number()]),
  rating: z.number().min(0).max(5),
});

interface FilterOptionsCardProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedRating: number;
  setSelectedRating: (rating: number) => void;
}

function FilterOptionsCard({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedRating,
  setSelectedRating,
}: FilterOptionsCardProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: selectedCategory,
      priceRange: priceRange,
      rating: selectedRating,
    },
  });

  // Store latest values in refs to avoid stale closures
  const latestValues = React.useRef({
    selectedCategory,
    priceRange,
    selectedRating,
    setSelectedCategory,
    setPriceRange,
    setSelectedRating,
  });

  // Update refs when props change
  React.useEffect(() => {
    latestValues.current = {
      selectedCategory,
      priceRange,
      selectedRating,
      setSelectedCategory,
      setPriceRange,
      setSelectedRating,
    };
  });

  // Update form values when props change
  React.useEffect(() => {
    form.reset({
      category: selectedCategory,
      priceRange: priceRange,
      rating: selectedRating,
    });
  }, [selectedCategory, priceRange, selectedRating, form]);

  // Update parent state when form values change (stable with empty deps)
  const handleChange = React.useCallback((values: z.infer<typeof formSchema>) => {
    const current = latestValues.current;
    if (values.category !== current.selectedCategory) {
      current.setSelectedCategory(values.category);
    }
    if (
      values.priceRange[1] !== current.priceRange[1] ||
      values.priceRange[0] !== current.priceRange[0]
    ) {
      current.setPriceRange([...values.priceRange] as [number, number]);
    }
    if (values.rating !== current.selectedRating) {
      current.setSelectedRating(values.rating);
    }
  }, []); // Empty dependency array since we use refs

  // Watch form changes and update parent state
  React.useEffect(() => {
    const { watch } = form;
    const subscription = watch(
      (values: Partial<z.infer<typeof formSchema>>, { name }: { name?: string }) => {
        console.log(name);
        if (values.category !== undefined && values.priceRange && values.rating !== undefined) {
          handleChange(values as z.infer<typeof formSchema>);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [handleChange, form]); // Only handleChange is needed since form.watch is stable

  // Handle reset filters
  const handleReset = () => {
    const defaultPriceRange: [number, number] = [0, 500];
    const current = latestValues.current;
    current.setSelectedCategory("");
    current.setPriceRange([...defaultPriceRange]);
    current.setSelectedRating(0);
    form.reset({
      category: "",
      priceRange: [...defaultPriceRange],
      rating: 0,
    });
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
      <h3 className="text-lg font-semibold mb-6">Filter Products</h3>
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="cat-all" />
                      <FormLabel htmlFor="cat-all" className="font-normal">
                        All Categories
                      </FormLabel>
                    </div>
                    {categories.map((category: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={category} id={`cat-${index}`} />
                        <FormLabel htmlFor={`cat-${index}`} className="font-normal">
                          {category}
                        </FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Range</FormLabel>
                <FormControl>
                  <div className="px-2">
                    <Slider
                      min={10}
                      max={5000}
                      step={10}
                      value={[field.value[1]]}
                      onValueChange={(value: number[]) => {
                        const newPriceRange: [number, number] = [0, value[0]];
                        field.onChange(newPriceRange);
                        setPriceRange(newPriceRange);
                      }}
                      className="w-full"
                    />
                  </div>
                </FormControl>
                <div className="flex justify-between text-base font-medium mt-2">
                  <span>${field.value[0]}</span>
                  <span>${field.value[1]}</span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value: string) => field.onChange(parseInt(value))}
                    value={field.value.toString()}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="rating-all" />
                      <FormLabel htmlFor="rating-all" className="font-normal">
                        All Ratings
                      </FormLabel>
                    </div>
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                        <FormLabel
                          htmlFor={`rating-${rating}`}
                          className="font-normal flex items-center"
                        >
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              size={16}
                              className={
                                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }
                            />
                          ))}
                          <span className="ml-1">& Up</span>
                        </FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4 border-t border-gray-100">
            <Button type="button" variant="outline" className="w-full" onClick={handleReset}>
              Reset Filters
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FilterOptionsCard;
