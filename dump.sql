--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

-- Started on 2022-12-21 01:50:44 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE shortly;
--
-- TOC entry 3383 (class 1262 OID 24576)
-- Name: shortly; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE shortly WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';


ALTER DATABASE shortly OWNER TO postgres;

\connect shortly

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 24603)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    id integer NOT NULL,
    "idUser" integer NOT NULL,
    token text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24602)
-- Name: session_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.session_id_seq OWNER TO postgres;

--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 213
-- Name: session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;


--
-- TOC entry 212 (class 1259 OID 24588)
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "idUser" integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24587)
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 211
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- TOC entry 210 (class 1259 OID 24578)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24577)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3223 (class 2604 OID 24606)
-- Name: session id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 24591)
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- TOC entry 3219 (class 2604 OID 24581)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3377 (class 0 OID 24603)
-- Dependencies: 214
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.session (id, "idUser", token, "createdAt") VALUES (1, 3, '3683be0d-f4b6-4e7d-a89e-927ec3e891bd', '2022-12-20');


--
-- TOC entry 3375 (class 0 OID 24588)
-- Dependencies: 212
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.urls (id, "idUser", "shortUrl", url, "visitCount", "createdAt") VALUES (2, 3, 'a0ea37', 'https://www.google.com/', 11, '2022-12-20');
INSERT INTO public.urls (id, "idUser", "shortUrl", url, "visitCount", "createdAt") VALUES (3, 2, 'b86252', 'https://erickssguerra.github.io/projeto3-driveneats/', 2, '2022-12-20');


--
-- TOC entry 3373 (class 0 OID 24578)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, name, email, password, "createdAt") VALUES (1, 'julia', 'julia@hotmail.com', '$2b$10$iiORVI8ZafUvP/GZZ1AjMuTJ/KNkEYCPDUgXBeGxMyvsVbB4GxOXG', '2022-12-20');
INSERT INTO public.users (id, name, email, password, "createdAt") VALUES (2, 'joao', 'joao@hotmail.com', '$2b$10$v/gGraHWHBWSW8mpOzyKwOgmDGKoIAq/Kd2GumJLGHhfS0CvJjAke', '2022-12-20');
INSERT INTO public.users (id, name, email, password, "createdAt") VALUES (3, 'igor', 'igor@hotmail.com', '$2b$10$.U1BxJApjaQh5X2eLCJr7eMi0q2H4ujjVllzvAzj04o92mKFOUddu', '2022-12-20');
INSERT INTO public.users (id, name, email, password, "createdAt") VALUES (4, 'erick', 'erick@driven.com.br', '$2b$10$79zhHyofZdHChgK/ufxLE.hSdx3EQu1qijTtLM5mzZqvoQpAiHpvW', '2022-12-21');


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 213
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.session_id_seq', 1, true);


--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 211
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 3, true);


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 3230 (class 2606 OID 24611)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 24596)
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 24586)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3232 (class 2606 OID 24612)
-- Name: session session_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT "session_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- TOC entry 3231 (class 2606 OID 24597)
-- Name: urls urls_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id);


-- Completed on 2022-12-21 01:50:44 -03

--
-- PostgreSQL database dump complete
--

