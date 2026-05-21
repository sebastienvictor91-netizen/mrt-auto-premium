import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

type VehicleStatus = "available" | "reserved" | "sold" | "hidden";

type Vehicle = {
id: string;
brand: string;
model: string;
year: number | null;
mileage: string | null;
fuel: string | null;
gearbox: string | null;
price: string | null;
image_url: string | null;
status: VehicleStatus;
};

const statusLabel: Record<VehicleStatus, string> = {
available: "En vente",
reserved: "Réservé",
sold: "Vendu",
hidden: "Masqué",
};

export default function Admin() {
const [session, setSession] = useState<Session | null>(null);
const [email, setEmail] = useState("contact@mrtautopremium.fr");
const [password, setPassword] = useState("");

const [vehicles, setVehicles] = useState<Vehicle[]>([]);
const [filter, setFilter] = useState<"all" | VehicleStatus>("all");
const [imageFile, setImageFile] = useState<File | null>(null);

const [form, setForm] = useState({
brand: "",
model: "",
year: "",
mileage: "",
fuel: "",
gearbox: "",
price: "",
status: "available" as VehicleStatus,
});

useEffect(() => {
supabase.auth.getSession().then(({ data }) => {
setSession(data.session);
});

const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
setSession(newSession);
});

return () => listener.subscription.unsubscribe();
}, []);

useEffect(() => {
if (session) loadVehicles();
}, [session]);

async function login() {
const { error } = await supabase.auth.signInWithPassword({ email, password });
if (error) alert("Email ou mot de passe incorrect.");
}

async function logout() {
await supabase.auth.signOut();
setSession(null);
}

async function loadVehicles() {
const { data, error } = await supabase
.from("vehicles")
.select("*")
.order("created_at", { ascending: false });

if (error) {
alert(error.message);
return;
}

setVehicles((data || []) as Vehicle[]);
}

async function uploadImage() {
if (!imageFile) return null;

const ext = imageFile.name.split(".").pop();
const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

const { error } = await supabase.storage
.from("vehicle-images")
.upload(fileName, imageFile);

if (error) {
alert(error.message);
return null;
}

const { data } = supabase.storage
.from("vehicle-images")
.getPublicUrl(fileName);

return data.publicUrl;
}

async function addVehicle() {
if (!form.brand || !form.model) {
alert("Marque et modèle obligatoires.");
return;
}

const imageUrl = await uploadImage();

const { error } = await supabase.from("vehicles").insert({
brand: form.brand,
model: form.model,
year: form.year ? Number(form.year) : null,
mileage: form.mileage,
fuel: form.fuel,
gearbox: form.gearbox,
price: form.price,
image_url: imageUrl,
status: form.status,
});

if (error) {
alert(error.message);
return;
}

setForm({
brand: "",
model: "",
year: "",
mileage: "",
fuel: "",
gearbox: "",
price: "",
status: "available",
});

setImageFile(null);
loadVehicles();
}

async function updateStatus(id: string, status: VehicleStatus) {
const { error } = await supabase.from("vehicles").update({ status }).eq("id", id);
if (error) alert(error.message);
loadVehicles();
}

async function deleteVehicle(id: string) {
if (!confirm("Supprimer ce véhicule ?")) return;
const { error } = await supabase.from("vehicles").delete().eq("id", id);
if (error) alert(error.message);
loadVehicles();
}

const filteredVehicles =
filter === "all" ? vehicles : vehicles.filter((vehicle) => vehicle.status === filter);

if (!session) {
return (
<div className="flex min-h-screen items-center justify-center bg-slate-100 px-5">
<div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
<h1 className="text-2xl font-bold">MRT Auto Premium</h1>
<p className="mb-6 mt-2 text-sm text-slate-500">
Connexion sécurisée à l’espace admin véhicules.
</p>

<input className="mb-3 w-full rounded-xl border p-3" value={email} onChange={(e) => setEmail(e.target.value)} />
<input className="mb-4 w-full rounded-xl border p-3" type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

<button onClick={login} className="w-full rounded-xl bg-cyan-700 p-3 font-bold text-white">
Se connecter
</button>
</div>
</div>
);
}

return (
<div className="min-h-screen bg-slate-100 px-5 py-8">
<div className="mx-auto max-w-7xl">
<div className="mb-6 flex items-center justify-between rounded-3xl bg-gradient-to-r from-sky-900 to-cyan-700 p-7 text-white shadow-lg">
<div>
<h1 className="text-3xl font-bold">MRT Auto Premium — Admin</h1>
<p className="mt-2 text-white/80">Gestion du stock véhicules en direct</p>
</div>

<button onClick={logout} className="rounded-xl bg-white/20 px-4 py-2 font-semibold">
Déconnexion
</button>
</div>

<div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
<button onClick={() => setFilter("all")} className="rounded-2xl bg-white p-4 font-semibold shadow">Tous<br />{vehicles.length}</button>
<button onClick={() => setFilter("available")} className="rounded-2xl bg-white p-4 font-semibold shadow">En vente<br />{vehicles.filter((v) => v.status === "available").length}</button>
<button onClick={() => setFilter("reserved")} className="rounded-2xl bg-white p-4 font-semibold shadow">Réservés<br />{vehicles.filter((v) => v.status === "reserved").length}</button>
<button onClick={() => setFilter("sold")} className="rounded-2xl bg-white p-4 font-semibold shadow">Vendus<br />{vehicles.filter((v) => v.status === "sold").length}</button>
<button onClick={() => setFilter("hidden")} className="rounded-2xl bg-white p-4 font-semibold shadow">Masqués<br />{vehicles.filter((v) => v.status === "hidden").length}</button>
</div>

<div className="mb-8 rounded-3xl bg-white p-6 shadow">
<h2 className="mb-5 text-2xl font-bold">Ajouter un véhicule</h2>

<div className="grid gap-3 md:grid-cols-2">
<input className="rounded-xl border p-3" placeholder="Marque" value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Modèle" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Année" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Kilométrage" value={form.mileage} onChange={(e) => setForm({ ...form, mileage: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Carburant" value={form.fuel} onChange={(e) => setForm({ ...form, fuel: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Boîte" value={form.gearbox} onChange={(e) => setForm({ ...form, gearbox: e.target.value })} />
<input className="rounded-xl border p-3" placeholder="Prix" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />

<select className="rounded-xl border p-3" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as VehicleStatus })}>
<option value="available">En vente</option>
<option value="reserved">Réservé</option>
<option value="sold">Vendu</option>
<option value="hidden">Masqué</option>
</select>

<div className="md:col-span-2 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 p-5 text-center">
<label className="block cursor-pointer">
<div className="text-3xl">📸</div>
<div className="mt-2 font-bold text-cyan-800">
Importer une photo du véhicule
</div>
<div className="mt-1 text-sm text-slate-500">
JPG, PNG ou WEBP — photo principale affichée sur le site
</div>

<input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="mt-4 w-full rounded-xl bg-white p-3 text-sm" />
</label>

{imageFile && (
<p className="mt-3 text-sm font-semibold text-cyan-800">
Photo sélectionnée : {imageFile.name}
</p>
)}
</div>
</div>

<button onClick={addVehicle} className="mt-5 w-full rounded-xl bg-cyan-700 p-4 font-bold text-white">
Ajouter le véhicule
</button>
</div>

<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
{filteredVehicles.map((v) => (
<div key={v.id} className="overflow-hidden rounded-3xl bg-white shadow">
{v.image_url ? (
<img src={v.image_url} alt={`${v.brand} ${v.model}`} className="h-56 w-full object-cover" />
) : (
<div className="flex h-56 items-center justify-center bg-slate-200 text-slate-500">Aucune photo</div>
)}

<div className="p-5">
<div className="mb-2 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
{statusLabel[v.status]}
</div>

<h3 className="text-xl font-bold">{v.brand} {v.model}</h3>
<p className="text-sm text-slate-600">{v.year || "Année NC"} · {v.mileage || "Km NC"}</p>
<p className="text-sm text-slate-600">{v.fuel || "Carburant NC"} · {v.gearbox || "Boîte NC"}</p>
<p className="mt-2 font-bold">{v.price || "Prix sur demande"}</p>

<select className="mt-4 w-full rounded-xl border p-2" value={v.status} onChange={(e) => updateStatus(v.id, e.target.value as VehicleStatus)}>
<option value="available">En vente</option>
<option value="reserved">Réservé</option>
<option value="sold">Vendu</option>
<option value="hidden">Masqué</option>
</select>

<button onClick={() => deleteVehicle(v.id)} className="mt-3 rounded-xl bg-red-600 px-4 py-2 text-white">
Supprimer
</button>
</div>
</div>
))}
</div>
</div>
</div>
);
}