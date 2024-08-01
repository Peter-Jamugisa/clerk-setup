// pages/api/check-role.js
"use server"
import { checkRole } from "@/utils/roles";

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any; }; json: { (arg0: { isAdmin?: boolean; error?: string; }): void; new(): any; }; }; }) {
  if (req.method !== 'GET') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    const isAdmin = await checkRole("admin");
    res.status(200).json({ isAdmin });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check role' });
  }
}
