'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { getDeleteBook } from '@/lib/admin/actions/book';

export function RowActionDelete({ row }: { row: any; }) {
    const [open, setOpen] = useState(false);
    const item = row.original;

    const handleDelete = async () => {
        await getDeleteBook(item.id);
        setOpen(false);
        window.location.reload();
    };

    return (
        <>
            <Button variant="ghost" onClick={(e) => {
                e.stopPropagation(); // zabrání bublině kliknutí
                setOpen(true);
            }}>
                Smazat
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent onClick={(e) => e.stopPropagation()}>
                    <DialogTitle>Opravdu chcete smazat "{item.title}"?</DialogTitle>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Zrušit
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            Smazat
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}