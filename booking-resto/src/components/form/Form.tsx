// pages/index.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

type Book = {
  title: string;
  author: string;
};

type Publisher = {
  name: string;
  location: string;
};

const bookSchema = z.object({
  title: z.string().min(2, "Title is too short").max(100, "Title is too long"),
  author: z
    .string()
    .min(2, "Author is too short")
    .max(50, "Author is too long"),
});

const publisherSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100, "Name is too long"),
  location: z
    .string()
    .min(2, "Location is too short")
    .max(100, "Location is too long"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book & Publisher>();
  const [submittedData, setSubmittedData] = useState<(Book & Publisher) | null>(
    null
  );

  const onSubmit: SubmitHandler<Book & Publisher> = (data) => {
    // Validate the data
    const bookResult = bookSchema.safeParse({
      title: data.title,

      author: data.author,
    });
    const publisherResult = publisherSchema.safeParse({
      name: data.name,
      location: data.location,
    });

    if (bookResult.success && publisherResult.success) {
      // If the data is valid, add it to the submittedData state
      setSubmittedData(data);
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Book Title</label>
          <input {...register("title")} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>Book Author</label>
          <input {...register("author")} />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div>
          <label>Publisher Name</label>
          <input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Publisher Location</label>
          <input {...register("location")} />
          {errors.location && <p>{errors.location.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Book Title: {submittedData.title}</p>
          <p>Book Author: {submittedData.author}</p>
          <p>Publisher Name: {submittedData.name}</p>
          <p>Publisher Location: {submittedData.location}</p>
        </div>
      )}
    </div>
  );
}
