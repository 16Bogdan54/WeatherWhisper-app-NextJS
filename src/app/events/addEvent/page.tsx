"use client";

import { Button, Label, Textarea, TextInput } from "flowbite-react";

export default async function addEventPage() {
  return (
    <form>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="base" value="Title" />
        </div>
        <TextInput id="base" sizing="md" type="text" placeholder="Title" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="base" value="Author" />
        </div>
        <TextInput id="base" sizing="md" type="text" placeholder="Author" />
      </div>
      <div className="max-w-md mb-4" id="textarea">
        <div className="mb-2 block">
          <Label className="text-white" htmlFor="comment" value="Description" />
        </div>
        <Textarea id="comment" placeholder="Description" required rows={3} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
